#!/usr/bin/env python3
"""Master generator — creates complete index.html"""
import base64, os, json

def b64img(path, mime='image/png'):
    try:
        data = open(path, 'rb').read()
        return f"data:{mime};base64,{base64.b64encode(data).decode()}"
    except:
        return ''

logo_src = b64img('/mnt/user-data/uploads/ADCLogo1.png', 'image/png')
tyna_src = b64img('/mnt/user-data/uploads/TYNA1.jpg', 'image/jpeg')
wang_src = b64img('/mnt/user-data/uploads/WangYexinportrait.jpg', 'image/jpeg')
print(f"Images: logo={len(logo_src)//1024}KB tyna={len(tyna_src)//1024}KB wang={len(wang_src)//1024}KB")

# Write parts separately then combine
print("Writing CSS...")
