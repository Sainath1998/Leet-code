from array import array


from array import *
def palindrom(num):
    k = 0
    rev = 0
    n = num
    while(num > 0):
        k = num % 10
        rev = (rev * 10)+ k
        num = num // 10
    if (rev == n) :
        return(True)
    else:
        return(False)
        
t = int(input('Enter the number of test cases \n'))
while(t>=0):
    num = int(input('Enter the number to find next palindrome number \n '))
    num = num +1
    while(num > 1):
        if(palindrom(num)):
            print('\n',num)
            break
        else:
            num = num +1
    t = t-1

