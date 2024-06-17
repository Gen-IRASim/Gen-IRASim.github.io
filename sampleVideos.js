async function sample_short_videos() {
    console.log('Sample button clicked'); // 调试信息

    const videoGrid = document.getElementById('uncurated_short_video_grid');
    videoGrid.innerHTML = '';

    const folders = [
        { pred: 'myassets/videos/uncurated/pred/sample/rt1', true: 'myassets/videos/uncurated/true/sample/rt1', overlay: 'RT-1' },
        { pred: 'myassets/videos/uncurated/pred/sample/bridge', true: 'myassets/videos/uncurated/true/sample/bridge', overlay: 'Bridge' },
        { pred: 'myassets/videos/uncurated/pred/sample/languagetable', true: 'myassets/videos/uncurated/true/sample/languagetable', overlay: 'Language-Table' }
    ];
    const totalVideos = 36;

    // 获取8个唯一随机索引
    const indices = new Set();
    while (indices.size < 6) {
        indices.add(Math.floor(Math.random() * totalVideos));
    }

    console.log('Selected indices:', indices); // 调试信息

    // 清空视频网格
    videoGrid.innerHTML = '';

    function createVideoElement(videoPath, overlayText) {
        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video_wrapper';
        videoWrapper.innerHTML = `
            <div class="video_container">
                <video autoplay muted playsinline loop>
                    <source src="${videoPath}" type="video/mp4">
                </video>
                <div class="overlay">Short Trajectory<br>${overlayText}</div>
            </div>
        `;
        return videoWrapper;
    }

    folders.forEach(folder => {
        indices.forEach(index => {
            const predVideoPath = `${folder.pred}/${index}.mp4`;
            const trueVideoPath = `${folder.true}/${index}.mp4`;

            console.log('Loading videos:', predVideoPath, trueVideoPath); // 调试信息

            const videoWrapperPred = createVideoElement(predVideoPath, `${folder.overlay} Prediction`);
            const videoWrapperTrue = createVideoElement(trueVideoPath, `${folder.overlay} Ground-truth`);

            videoGrid.appendChild(videoWrapperPred);
            videoGrid.appendChild(videoWrapperTrue);
        });
    });
}

async function sample_long_videos() {
    console.log('Sample button clicked'); // 调试信息

    const videoGrid = document.getElementById('uncurated_long_video_grid');
    videoGrid.innerHTML = '';

    const folders = [
        { pred: 'myassets/videos/uncurated/pred/episode/rt1', true: 'myassets/videos/uncurated/true/episode/rt1', overlay: 'RT-1' },
        { pred: 'myassets/videos/uncurated/pred/episode/bridge', true: 'myassets/videos/uncurated/true/episode/bridge', overlay: 'Bridge' },
        { pred: 'myassets/videos/uncurated/pred/episode/languagetable', true: 'myassets/videos/uncurated/true/episode/languagetable', overlay: 'Language-Table' }
    ];
    const totalVideos = 36;

    // 获取8个唯一随机索引
    const indices = new Set();
    while (indices.size < 6) {
        indices.add(Math.floor(Math.random() * totalVideos));
    }

    console.log('Selected indices:', indices); // 调试信息

    function createVideoElement(videoPath, overlayText) {
        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video_wrapper';
        videoWrapper.innerHTML = `
            <div class="video_container">
                <video autoplay muted playsinline loop>
                    <source src="${videoPath}" type="video/mp4">
                </video>
                <div class="overlay">Long Trajectory<br>${overlayText}</div>
            </div>
        `;
        return videoWrapper;
    }

    folders.forEach(folder => {
        indices.forEach(index => {
            const predVideoPath = `${folder.pred}/${index}.mp4`;
            const trueVideoPath = `${folder.true}/${index}.mp4`;

            // 增加更多的调试信息
            console.log(`Attempting to load prediction video from: ${predVideoPath}`); // 调试信息
            console.log(`Attempting to load ground-truth video from: ${trueVideoPath}`); // 调试信息

            const videoWrapperPred = createVideoElement(predVideoPath, `${folder.overlay} Prediction`);
            const videoWrapperTrue = createVideoElement(trueVideoPath, `${folder.overlay} Ground-truth`);

            videoGrid.appendChild(videoWrapperPred);
            videoGrid.appendChild(videoWrapperTrue);

            // 验证元素是否被正确创建和添加
            console.log(`Appended prediction video element for index ${index}`);
            console.log(`Appended ground-truth video element for index ${index}`);
        });
    });

    // 最后再检查一次是否所有元素都被正确添加
    console.log('Final video grid content:', videoGrid.innerHTML);
}

