import os
import imageio

def get_video_frames_count(video_path):
    try:
        reader = imageio.get_reader(video_path, 'ffmpeg')
        return reader.count_frames()
    except Exception as e:
        print(f"Error reading {video_path}: {e}")
        return -1

def compare_video_frames(pred_folder, true_folder):
    mismatched_videos = []
    
    for root, _, files in os.walk(pred_folder):
        for file in files:
            if file.endswith('.mp4'):
                pred_video_path = os.path.join(root, file)
                true_video_path = os.path.join(true_folder, os.path.relpath(pred_video_path, pred_folder))
                
                if not os.path.exists(true_video_path):
                    print(f"True video {true_video_path} does not exist.")
                    continue
                
                pred_frames = get_video_frames_count(pred_video_path)
                true_frames = get_video_frames_count(true_video_path)
                
                if pred_frames != true_frames:
                    mismatched_videos.append((pred_video_path, true_video_path, pred_frames, true_frames))
    
    return mismatched_videos

def main():
    pred_folder = 'assets/videos/uncurated/pred/episode'
    true_folder = 'assets/videos/uncurated/true/episode'
    
    mismatches = compare_video_frames(pred_folder, true_folder)
    
    if mismatches:
        print("Mismatched videos:")
        for pred, true, pred_frames, true_frames in mismatches:
            print(f"{pred} (frames: {pred_frames}) != {true} (frames: {true_frames})")
    else:
        print("All videos have matching frame counts.")

if __name__ == "__main__":
    main()
