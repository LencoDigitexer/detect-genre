import requests,json
a = "alone sibewest"
q = requests.get("https://api.soundcloud.com/tracks?client_id=a25e51780f7f86af0afa91f241d091f8&q={}".format(a))
q = q.text
q = json.loads(q)
print(q[0])
print("Тэги " + q[0]["tag_list"])
print("Жанр " + q[0]["genre"])
print("Название " + q[0]["title"])
print("Описание" + q[0]["description"])



