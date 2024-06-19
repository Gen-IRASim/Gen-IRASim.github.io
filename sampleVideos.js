async function sample_short_videos() {
    console.log('Sample button clicked'); // 调试信息

    const videoGrid = document.getElementById('uncurated_short_video_grid');
    videoGrid.innerHTML = '';

    const folders = [
        { pred: 'assets/videos/uncurated/pred/sample/rt1', true: 'assets/videos/uncurated/true/sample/rt1', overlay: 'RT-1' },
        { pred: 'assets/videos/uncurated/pred/sample/bridge', true: 'assets/videos/uncurated/true/sample/bridge', overlay: 'Bridge' },
        { pred: 'assets/videos/uncurated/pred/sample/languagetable', true: 'assets/videos/uncurated/true/sample/languagetable', overlay: 'Language-Table' }
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

            const videoWrapperPred = createVideoElement(predVideoPath, `${folder.overlay}<br>Prediction`);
            const videoWrapperTrue = createVideoElement(trueVideoPath, `${folder.overlay}<br>Ground-truth`);

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
        { pred: 'assets/videos/uncurated/pred/episode/rt1', true: 'assets/videos/uncurated/true/episode/rt1', overlay: 'RT-1' },
        { pred: 'assets/videos/uncurated/pred/episode/bridge', true: 'assets/videos/uncurated/true/episode/bridge', overlay: 'Bridge' },
        { pred: 'assets/videos/uncurated/pred/episode/languagetable', true: 'assets/videos/uncurated/true/episode/languagetable', overlay: 'Language-Table' }
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

            const videoWrapperPred = createVideoElement(predVideoPath, `${folder.overlay}<br>Prediction`);
            const videoWrapperTrue = createVideoElement(trueVideoPath, `${folder.overlay}<br>Ground-truth`);

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

async function sample_longest_videos() {
    console.log('Sample button clicked'); // 调试信息

    const videoGrid = document.getElementById('uncurated_long_video_grid');
    videoGrid.innerHTML = '';

    const folders = [
        {
            pred: 'assets/videos/uncurated/pred/episode/rt1',
            true: 'assets/videos/uncurated/true/episode/rt1',
            overlay: 'RT-1',
            frames: [
                { idx: 75, frame_count: 153 },
                { idx: 68, frame_count: 129 },
                { idx: 73, frame_count: 126 },
                { idx: 20, frame_count: 114 },
                { idx: 61, frame_count: 108 },
                { idx: 89, frame_count: 88 }
            ]
        },
        {
            pred: 'assets/videos/uncurated/pred/episode/bridge',
            true: 'assets/videos/uncurated/true/episode/bridge',
            overlay: 'Bridge',
            frames: [
                { idx: 79, frame_count: 79 },
                { idx: 94, frame_count: 77 },
                { idx: 15, frame_count: 74 },
                { idx: 48, frame_count: 65 },
                { idx: 44, frame_count: 61 },
                { idx: 39, frame_count: 49 }
            ]
        },
        {
            pred: 'assets/videos/uncurated/pred/episode/languagetable',
            true: 'assets/videos/uncurated/true/episode/languagetable',
            overlay: 'Language-Table',
            frames: [
                { idx: 38, frame_count: 48 },
                { idx: 4, frame_count: 47 },
                { idx: 83, frame_count: 47 },
                { idx: 61, frame_count: 42 },
                { idx: 89, frame_count: 42 },
                { idx: 93, frame_count: 42 }
            ]
        }
    ];
    

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
        folder.frames.forEach(frame => {
            console.log(frame); // 调试信息
            const predVideoPath = `${folder.pred}/${frame.idx}.mp4`;
            const trueVideoPath = `${folder.true}/${frame.idx}.mp4`;

            // 增加更多的调试信息
            console.log(`Attempting to load prediction video from: ${predVideoPath}`); // 调试信息
            console.log(`Attempting to load ground-truth video from: ${trueVideoPath}`); // 调试信息

            const videoWrapperPred = createVideoElement(predVideoPath, `${folder.overlay}<br>Prediction <br> ${frame.frame_count} frames`);
            const videoWrapperTrue = createVideoElement(trueVideoPath, `${folder.overlay}<br>Ground-truth <br> ${frame.frame_count} frames`);

            videoGrid.appendChild(videoWrapperPred);
            videoGrid.appendChild(videoWrapperTrue);

            // 验证元素是否被正确创建和添加
            console.log(`Appended prediction video element for index ${frame.idx}`);
            console.log(`Appended ground-truth video element for index ${frame.idx}`);
        });
    });

    // 最后再检查一次是否所有元素都被正确添加
    console.log('Final video grid content:', videoGrid.innerHTML);
}

