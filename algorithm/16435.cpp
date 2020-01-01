#include<iostream>
#include<algorithm>
using namespace std;

int main(){
	int N, L;
	cin>>N>>L;
	int h[N];
	for(int i = 0 ; i < N; i++){
		cin>>h[i];
	}//입력부 끝
	sort(h,h+N);
	for(int i = 0; i < N; i++){
		for(int j = 0; j < N; j++){
			if(h[j]<=L){
				L = L + 1;
				h[j] = 10002;
				break;
			}
		}
	}
	cout<<L;
	
	return 0;
}
