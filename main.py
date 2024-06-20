import imageio
import numpy as np
import os

def concatenate_videos_side_by_side(video_path1, video_path2, output_path, fps=4):
    # 读取两个视频
    reader1 = imageio.get_reader(video_path1)
    reader2 = imageio.get_reader(video_path2)
    
    # 获取两个视频的帧数和帧尺寸
    frames1 = [frame for frame in reader1]
    frames2 = [frame for frame in reader2]
    
    # 确保两个视频的帧数一致
    min_frames = min(len(frames1), len(frames2))
    frames1 = frames1[:min_frames]
    frames2 = frames2[:min_frames]
    
    # 获取帧的尺寸
    height1, width1, _ = frames1[0].shape
    height2, width2, _ = frames2[0].shape
    
    # 确保两个视频的高度一致，如果不一致，调整其中一个视频的高度
    if height1 != height2:
        raise ValueError("两段视频的高度不一致，请调整视频使其高度一致。")
    
    # 拼接视频帧
    concatenated_frames = []
    for frame1, frame2 in zip(frames1, frames2):
        concatenated_frame = np.hstack((frame1, frame2))
        concatenated_frames.append(concatenated_frame)
    
    # 写入新视频
    writer = imageio.get_writer(output_path, fps=fps)
    for frame in concatenated_frames:
        writer.append_data(frame)
    
    writer.close()
    reader1.close()
    reader2.close()


# for j in ['bridge','languagetable','rt1']:
#         video_path1 = f'assets/videos/uncurated/pred/{i}/{j}/{k}.mp4'
#         video_path2 = f'assets/videos/uncurated/true/{i}/{j}/{k}.mp4'
#         output_path = f'assets/videos/new_uncurated/{i}/{j}/{k}.mp4'
#         os.makedirs(os.path.dirname(output_path),exist_ok=True)
#         concatenate_videos_side_by_side(video_path1, video_path2, output_path)
#         print(output_path)

concatenate_videos_side_by_side('assets/videos/application/languagetabel_example1.mp4', 'assets/videos/application/languagetabel_example2.mp4', 'assets/videos/application/app_languagetabel.mp4')


# for i in ['long','short']:
#     for j in ['bridge','languagetable','rt1']:
#         video_path1 = f'assets/videos/{i}/pred_{j}.mp4'
#         video_path2 = f'assets/videos/{i}/true_{j}.mp4'
#         try:
#             os.remove(video_path1)
#         except:
#             print()
            
#         try:
#             os.remove(video_path2)
#         except:
#             print()

