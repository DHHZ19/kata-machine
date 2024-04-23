export default function bubble_sort(arr: number[]): void {
    let swap = false;
    let j = 0;
    while (!swap) {
        swap = true;
        for (let i = 0; i < arr.length - 1 - j; i++)
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                i++;
                swap = false;
            }
        j++;
    }
}
