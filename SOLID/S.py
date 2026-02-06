from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED


class fileManager:
    def __init__(self, filename):
        self.path = filename
        
    def read(self, encoding = 'utf-8'):
        try:
            with open(self.path, 'r', encoding=encoding) as file:
                content = file.read()
            return content 
            
        except FileNotFoundError:
            return "File is not found"
    def write(self, data):
        try:
            with open(self.path, 'a') as file:
                file.write(data)
            print(f"Content written successfully")
        except Exception as e:
            print(f"An error occured while writing the file: {e}")
        
        
class ZipFileManager:
    def __init__(self, filename):
        self.path = filename
    def compress(self):
        with ZipFile('test.zip', 'w', compression=ZIP_DEFLATED) as zfile:
            zfile.write(self.path)
            
    def decompress(self):
        with ZipFile('test.zip', 'r') as zfile:
            zfile.extractall('J:/DSA')
            
file = fileManager('J:/DSA/SOLID/test.txt')
fileZip = ZipFileManager('J:/DSA/SOLID/test.txt')

print(file.read())
file.write("What are you doing, how are you")
fileZip.compress()
fileZip.decompress()