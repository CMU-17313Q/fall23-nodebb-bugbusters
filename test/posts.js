it('should anonimize for a non post author', async () => {
    const data = await topics.post({
        uid: anonuser,
        cid: cid,
        title: 'Anonymous Test Topic',
        content: 'Test anonymous content',
        isAnonymous: 'true',
    });
    const { tid } = data.postData;
    const topicRead = await topics.getTopicWithPosts(data.postData.topic, `tid:${tid}:posts`, otheruser, 0, 19);
    assert.equal(topicRead.posts[0].user.displayname.slice(0, 9), 'Anonymous');
});