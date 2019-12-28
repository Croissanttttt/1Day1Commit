#include<iostream>
#include<string>

using namespace std;

bool prime(int a)
{
	int b = a / 2 + 1;
	for (int i = 2; i < b; i++)
	{
		if (a % i == 0)
			return false;
	}
	return true;
}

int main() {
	string q;
	int temp[20];
	int sum = 0;
	bool result = false;
	getline(cin, q);
	for (int i = 0; i < q.length(); i++) {
		if (q[i] < 91) {
			temp[i] = q[i] - 38;
		}
		else if (q[i] > 96) {
			temp[i] = q[i] - 96;
		}
	}
	for (int i = 0; i < q.length(); i++) {
		sum = sum + temp[i];
	}
	result = prime(sum);
	cout << "It is ";
	if (!result) {
		cout << "not ";
	}
	cout << "a prime word.";

	return 0;
}
