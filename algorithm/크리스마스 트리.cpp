#include<iostream>
using namespace std;
int main() {
	int n;
	cout<<"      ¡Ú"<<'\n'; 
	for (int i = 0; i < 3; i++){
		n = 1 + 4 * i; 
		for (int j = 0; j < 4; j++){
			for (int k = 0; k < 15; k++){
				if (k < (15 - (n + 2 * j)) / 2 || k >= (15 + (n + 2 * j)) / 2){
    				cout<<" ";}
    			else if((j+2*k)%9==8){
    				cout<<"@";}
    			else{cout<<"x";}
			}
		cout<<'\n';
		}
	}
	for(int i = 0; i < 2; i++){
		cout<<"      | |      "<<'\n';
	}
	cout<<"      | |       ¡Ý¡Ý"<<'\n';
	cout<<"    |-----|    ¡á¡à¡á"<<'\n';
	cout<<"    |     |    ¡à¡à¡à"<<'\n';
	cout<<"    |_____|    ¡á¡à¡á"<<'\n';
	cout<<'\n';
	cout<<"Merry Christmas :D"<<'\n'<<'\n';
}
