function secondLargest() {
    let temp
    const arr = [10, 5, 3, 20];
    for (let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]<arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    // console.log(arr[i]);
   
    }
    console.log("second largest element is:" + arr[1]);
   

}
secondLargest();