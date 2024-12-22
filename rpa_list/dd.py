import tkinter as tk
from tkinter import messagebox

def on_submit():
    # 텍스트 박스에서 입력된 값 가져오기
    input_value = text_box.get()
    # 입력된 값을 메시지 박스로 출력하기
    messagebox.showinfo("입력된 값", f"입력된 값은: {input_value}")

# 메인 윈도우 생성
root = tk.Tk()
root.title("히히")
root.geometry("300x200")

# 창 색상 설정
root.configure(bg='lightblue')

# GIF 이미지를 사용하여 아이콘 설정
icon_image = tk.PhotoImage(file='./react.png')
root.iconphoto(True, icon_image)

# 텍스트 박스 레이블 생성
label = tk.Label(root, text="값을 입력하세요:")
label.pack(pady=10)
label.configure(bg='pink')

# 텍스트 박스 생성
text_box = tk.Entry(root, width=30)
text_box.pack(pady=10)

# 제출 버튼 생성
submit_button = tk.Button(root, text="제출", command=on_submit)
submit_button.pack(pady=10)


# 메인 루프 시작
root.mainloop()
