import requests
import webbrowser

url = "https://accounts.spotify.com/authorize?client_id=de61544a6adf44148a3af77dfa405b8e&response_type=token&redirect_uri=http://localhost:8888/callback&scope=user-read-currently-playing&state=34fFs29kd09"
webbrowser.open_new(url)

#response = requests.get('https://accounts.spotify.com/authorize?client_id=de61544a6adf44148a3af77dfa405b8e&response_type=token&redirect_uri=http://localhost:8888/callback&scope=user-read-currently-playing&state=34fFs29kd09')

#print(response.text)