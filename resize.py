
import imageio
import torch
import torchvision.transforms.functional as F

def resize_video(input_path, output_path, size):
    # 读取视频
    video_reader = imageio.get_reader(input_path, 'ffmpeg')
    video_writer = imageio.get_writer(output_path, fps=video_reader.get_meta_data()['fps'])
    
    # 逐帧处理视频
    for frame in video_reader:
        # 将帧从numpy数组转换为PIL图像
        pil_frame = F.to_pil_image(torch.from_numpy(frame).permute(2, 0, 1))
        # 调整帧的大小
        resized_frame = F.resize(pil_frame, size, antialias=True)
        # 将调整大小后的帧转换回numpy数组
        resized_frame = torch.tensor(F.to_tensor(resized_frame).numpy()).permute(1, 2, 0).numpy()
        # 写入新视频
        video_writer.append_data(resized_frame)
    
    # 关闭视频读写器
    video_reader.close()
    video_writer.close()

# 示例用法
input_video_path = 'input_video.mp4'
output_video_path = 'output_video.mp4'
resize_size = (320, 240)

resize_video(input_video_path, output_video_path, resize_size)
