import requests

headers = {
    'Authorization': 'Basic ZGU2MTU0NGE2YWRmNDQxNDhhM2FmNzdkZmE0MDViOGU6NTQyNzU5MTljOGZlNGJlNWEwYjQwZmY0ZDEzZjY1ZDI=',
}

data = {
  'grant_type': 'authorization_code',
  'code': 'AQDKv2ufaMbWd5sMfigK9zoGXdN0WtWVUPI9fTSaSKNsip3qxZ_y78qF7zuNkXXVWQ16dO3d1AqwY1N7a7K3FwtrO5qOXp6ZJ3OGoyDOSgoPwlGpCvsEX-o9q9_j0NHeX-JW6ArFExXluSu1gV-sjPpluxZEZ2LKXD6orxoIGNYrl13oIhc-LkAupn2b374IV5mr3t8nP8oEBTqDEJeIdZHvZqTZEQ',
  'redirect_uri': 'http://localhost:8888/callback'
}

response = requests.post('https://accounts.spotify.com/api/token', headers=headers, data=data)
