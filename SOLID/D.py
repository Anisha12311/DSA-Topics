from abc import ABC, abstractmethod
class FrontEnd:
    def __init__(self, datasource):
        self.datasource = datasource
        
    def display_data(self):
        data = self.datasource.get_data()
        print(data)


class Datasource(ABC):
    @abstractmethod
    def get_Data():
        pass
    

class Database(Datasource):
    def get_data():
        return 'Backend Data'
    
class FetchAPI(Datasource):
    def get_data():
        return 'Fetch From API Data'
    

frontend = FrontEnd(FetchAPI)

frontend.display_data()
        
        
       