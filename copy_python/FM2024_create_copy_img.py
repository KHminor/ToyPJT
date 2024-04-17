import shutil

def copy_and_rename_file(original_file, new_folder, default_num, start_num, end_num, not_delete_files):
    # 파일을 end_num 만큼 복사하고 이름을 변경하는 함수
    for i in range(start_num,end_num+1):
        if i not in not_delete_files:
            destination = new_folder + f"r-{default_num}{i:05d}.png"  # 새로운 파일의 경로
            shutil.copyfile(original_file, destination)  # 파일 복사
            print(f"복사 완료: {destination}")
        else: print(f"{i}는 있는 사진")
    print("생성 완료")

# 순서 
# 1. 각각의 "" 안에 이미지 경로와 생성 파일 경로를 붙여 넣기
이미지 = r"" # 
생성_파일경로 = r"" 
original_file = (이미지 +"/").replace("\\","/")
new_folder = (생성_파일경로+"/").replace("\\","/")

# 2. 파일 공통 번호 입력
default_num = "20020" 

# 3. 기존 생성한 커스텀 파일에서 공통 번호를 제외한 나머지 번호 입력 
not_delete_files = {61815,61816,69184} 

# 4. 시작하고 싶은 번호와 마지막 파일 번호를 각각 입력
start_num = 61000
end_num = 79999

# 5. 함수 실행
copy_and_rename_file(original_file, new_folder, default_num, start_num, end_num, not_delete_files) # 함수 실행