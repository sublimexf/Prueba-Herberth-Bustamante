
def isPalindrom(_num):
    num = _num
    i=0
    while i < 50:
        str_num = str(num)
        rev_num = str_num[::-1] # reverts the string

        if rev_num == str_num:
            break # palindrom found
        else:
            num = int(rev_num) + num
        i += 1
    else:
        return str_num ### machete found


def start():
    answer = []
    for i in range(10000):
        palindrom = isPalindrom(i)
        if (palindrom):
            answer.append([i, palindrom])
    
    print("Hay " + str(len(answer)) + " números Machete menores que 10,000")

