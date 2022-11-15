
#include<stdio.h>
#include<vector>
#include<algorithm>
#define MAX(x,y) ( (x) >= (y) ? (x) : (y) )
int main(){
	  int t;
	  scanf("%d",&t);
	  for(int T=0;T<t;T++){
		int n;
		int max=0;
		int S[2000];
		std::vector<int > LIS,LDS;
		std::vector<int>::iterator Q;
		scanf("%d",&n);
		for(int i=0;i<n;i++)
			  scanf("%d",&S[i]);
		for(int i=n-1;i>=0;i--){
        int len1,len2;
        
        Q=std::lower_bound(LDS.begin(),LDS.end(),S[i]);
        if( Q==LDS.end() )
          LDS.push_back(S[i]),len2=LDS.size();
        else
          *Q=S[i],len2=Q-LDS.begin()+1;

        Q=std::lower_bound(LIS.begin(),LIS.end(),-S[i]);
        if(  Q==LIS.end() )
          LIS.push_back(-S[i]),len1=LIS.size();
        else
          *Q=-S[i],len1=Q-LIS.begin()+1;
        max=MAX(max,len1+len2-1);
		}
    
		printf("%d\n",max);
	}
	return 0;
}