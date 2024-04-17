import shutil # shell utilities

원본파일 = "origin.png"

shutil.copy(원본파일,"test.png") # 파일 복사

복사폴더 = "test/"
shutil.copy(원본파일,f"{복사폴더}test.png") # 특정 폴더에 복사

shutil.move(원본파일,복사폴더) # 파일 이동