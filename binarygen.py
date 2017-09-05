import random
print(1)
for i in range(100):
    tmp='';
    for j in range(100):
        tmp += str(random.randint(0,1))
    print(tmp)
