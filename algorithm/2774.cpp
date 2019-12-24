#include<iostream>
#include<math.h>
#include<algorithm>
using namespace std;
int main(){
	int T;
	cin>>T;
	int ans[T];
	for(int i = 0; i < T; i++){
		int X[T], R[11];
		int temp = 0;
		ans[i] = 0;
		cin>>X[i];
		for(int j = 0; j < 11; j++){
			R[j] = X[i]/pow(10,j);
			if(R[j]==0){
				break;
			}
		}
		for(int j = 0; j < 11; j++){
			R[j] = R[j] - R[j+1] * 10;
			if(R[j+1]==0){
				temp = j + 1;
				break;
			}
		}
		sort(R,R+temp);
		for(int j = 0; j < temp; j++){
			if(R[j]!=R[j+1]){
				ans[i]++;
			}
		}
		cout<<ans[i]<<'\n';
	}
		
	return 0;
}
