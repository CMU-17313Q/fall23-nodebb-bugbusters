'use strict';

// Import the fetch module
const fetch = require('node-fetch');

const helpers = require('../helpers');
const user = require('../../user');
const db = require('../../database');

const Career = module.exports;

Career.register = async (req, res) => {
    const userData = req.body;
    try {
        // Prepare the query parameters
        const queryParams = new URLSearchParams({
            student_id: userData.student_id,
            gender: userData.gender,
            age: userData.age,
            major: userData.major,
            gpa: userData.gpa,
            extra_curricular: userData.extra_curricular,
            num_programming_languages: userData.num_programming_languages,
            num_past_internships: userData.num_past_internships,
        }).toString();

        const response = await fetch(`hhttps://mlmodel1-wgtqgd7dva-uc.a.run.app/predict?${queryParams}`);
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const predictionResult = await response.json();
        // If the response does not contain a 'good_employee' key, handle it appropriately
        if (typeof predictionResult.good_employee !== 'number') {
            throw new Error('Invalid prediction response structure');
        }
        // Assign the prediction to the user's career data
        const userCareerData = {
            ...userData, // spread in the original user data
            prediction: predictionResult.good_employee,
        };

        await user.setCareerData(req.uid, userCareerData);
        db.sortedSetAdd('users:career', req.uid, req.uid);
        res.json({});
    } catch (err) {
        console.log(err);
        helpers.noScriptErrors(req, res, err.message, 400);
    }
};
