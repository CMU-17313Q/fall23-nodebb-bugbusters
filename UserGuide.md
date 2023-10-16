# User Guide

## Feature 1: Posting and Replying Anonymously

### Overview
The posting and replying anonymously feature allows users to submit questions or answers without revealing their identity. This can be particularly useful when a user is unsure of the content or simply prefers to remain anonymous.

### How it Works
1. **Posting Panel:**
   - When composing a post or reply, users will find a checkbox option labeled "Post Anonymously."
   - By checking this option, the user's post will be submitted anonymously.

2. **Visibility:**
   - Users who have posted anonymously can still view their own posts with their username and account details.
   - Other users, upon viewing the post, will see a randomized anonymous username and profile picture
   - and will not have access to the author's account information.

### User Testing Instructions
1. **Setup:**
   - Open a terminal window in the main directory.
   - Start the server using the command: `redis-server`.
   - Perform NodeBB setup and build with the following commands:
     ```bash
     ./nodebb setup
     ./nodebb build
     ```
   - Start the NodeBB server: `./nodebb start`.
   - Access the application via the assigned localhost.

2. **Testing Scenarios:**
   - **Scenario 1: Posting Anonymously**
     1. Register or log in to an account.
     2. Create a new topic or reply while ensuring the "Post Anonymously" checkbox is selected.
     3. Verify that the post is submitted successfully and is displayed with the username hidden.

   - **Scenario 2: Replying Anonymously and Non-Anonymously**
     1. Reply to an existing topic anonymously.
     2. Reply to another topic without enabling the anonymous option.
     3. Check both replies to ensure the user's account and username are visible in the non-anonymous reply.

   - **Scenario 3: Viewing Anonymous Posts**
     1. Log out of the current account.
     2. Register or log in with a different/new account.
     3. Verify that anonymous posts/replies are visible under a randomized anonymous username and profile picture,            and that access to the author's account is restricted.

### Automated Tests
Automated tests have been implemented to ensure the reliability and functionality of the anonymous posting feature.
Link: https://github.com/CMU-17313Q/fall23-nodebb-bugbusters/blob/main/test/posts.js
1. **Test 1: isAnonymous Attribute**
   - **Description:** This test checks if the 'isAnonymous' boolean attribute, set to true when the checkbox is checked, is saved in the database and is a part of the schema at all times.
   - **Location:** [test/posts.js line 96]
2. **Test 2: Viewing Own Anonymous Posts**
   - **Description:** This test verifies whether authors can still view their own posts made anonymously.
   - **Location:** [test/posts.js line 109]
3. **Test 3: Viewing Others Anonymous Posts**
   - **Description:** This test verifies that non authors can not view others anonymous posts.
   - **Location:** [test/posts.js line 99]

Please refer to the provided test files for detailed test scenarios, implementation details, and coverage rationale.

---

This comprehensive guide provides an overview of the anonymous posting feature, detailed testing instructions, and information about the corresponding automated tests. Follow the outlined steps to test the feature thoroughly and ensure its seamless integration into the application.
