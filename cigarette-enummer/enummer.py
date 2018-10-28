r = open('cigarette.txt', 'r')
c = open('result.txt', 'w')
i = 0
lines = r.readlines()

for line in lines:
    if i == len(lines) - 1:
        c.write("\t\"" + line.rstrip() + "\": " + str(i))
    else:
        c.write("\t\"" + line.rstrip() + "\": " + str(i) + ",\n")
    i = i + 1

r.close()
c.close()