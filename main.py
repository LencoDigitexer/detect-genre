import requests,json, os, time


def print_info():
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQDfHuCO4qTzk0LHxpMBCi7n2D3yAV2aOqCm_0g6mwJP_WlkytWkftrwOq4TjGtm0NbmuQxE8PZfT_JO3oKpz3ib4fAFjeR7T_f2in4n7_UYsIFrRVNcIx2RsChKpI4bXqodTtpbpHIW88e1TROwwczQ6cQ6j73xPg1gToI',
    }

    params = (
        ('market', 'RU'),
    )

    q = requests.get('https://api.spotify.com/v1/me/player/currently-playing', headers=headers, params=params)

    #NB. Original query string below. It seems impossible to parse and
    #reproduce query strings 100% accurately so the one below is given
    #in case the reproduced version is not "correct".
    # response = requests.get('https://api.spotify.com/v1/me/player/currently-playing?market=RU', headers=headers)
    q = q.text
    q = json.loads(q)

    print("\n\n\nСейчас играет: ")
    try:
        print(q["item"]["name"] + " " + q["item"]["artists"][0]["name"])
    except:
        print(q)


    a = q["item"]["name"] + " " + q["item"]["artists"][0]["name"]
    q = requests.get("https://api.soundcloud.com/tracks?client_id=a25e51780f7f86af0afa91f241d091f8&q={}".format(a))
    q = q.text
    q = json.loads(q)
    #print(q[0])
    try:
        print("Тэги: " + q[0]["tag_list"])
    except: pass
    try:
        print("Жанр: " + q[0]["genre"])
    except: pass
    try:
        print("Название: " + q[0]["title"])
    except: pass
    try:
        print("Описание: " + q[0]["description"])
    except: pass

while(True):
    print_info()
    time.sleep(10)
    os.system('clear')


# https://accounts.spotify.com/en/authorize?client_id=de61544a6adf44148a3af77dfa405b8e&response_type=code&redirect_uri=http:%2F%2Flocalhost:8888%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09

# http://localhost:8888/callback?code=AQBYmTnCmduKz6YdiNU7jOn-iUgr8sVZX-jt3wN5kdqYCRWumK0mYniAUrbKC-so0pw7eYaw66yoHL7Cj1dGcUoBFpfU3K6OQFAvu4b2hKRZw-4cGHIC8FuFMo1kujXUVuBclhVCOXKNoKigT6latgqrAhsUk1STDbM2O4kEvMtWg_71sKil8xKjVf8Een3c3Bi_BQSCyhJYxQNchlG9k4abIUAJoQ&state=34fFs29kd09

# AQBYmTnCmduKz6YdiNU7jOn-iUgr8sVZX-jt3wN5kdqYCRWumK0mYniAUrbKC-so0pw7eYaw66yoHL7Cj1dGcUoBFpfU3K6OQFAvu4b2hKRZw-4cGHIC8FuFMo1kujXUVuBclhVCOXKNoKigT6latgqrAhsUk1STDbM2O4kEvMtWg_71sKil8xKjVf8Een3c3Bi_BQSCyhJYxQNchlG9k4abIUAJoQ



