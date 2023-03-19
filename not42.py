num = 0
other_nums = []
while num != 42:
    num = int(input(""))
    if num != 42:
        other_nums.append(num)
    
for n in other_nums:
    print(n)
