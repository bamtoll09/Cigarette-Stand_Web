import codecs

r = codecs.open('cigarette.txt', 'r', 'utf-8')
c = codecs.open('result.txt', 'w', 'utf-8')
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