//hasil nilai Min dari array
function getMin(arr) {
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}

//hasil nilai Max dari array
function getMax(arr) {
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

//hasil nilai Total dari array
function getTotal(arr) {
    let totalValue = 0;
    for (let i = 0; i < arr.length; i++) {
        totalValue += arr[i];
    }
    return totalValue;
}

//hasil nilai Rata-rata dari array
function getAverage(arr) {
    return getTotal(arr) / arr.length;
}

// Fungsi utama
function main() {
    const nilaiRandomArray = [];
    const arrayGenap = [];
    const arrayGanjil = [];

    // nilai random array(1 sampai 50)
    for (let i = 0; i < 100; i++) {
        nilaiRandomArray.push(Math.floor(Math.random() * 50) + 1);
    }

    //array genap dan ganjil
    for (let i = 0; i < nilaiRandomArray.length; i++) {
        if (i % 2 === 0) {
            arrayGenap.push(nilaiRandomArray[i]);
        } else {
            arrayGanjil.push(nilaiRandomArray[i]);
        }
    }

    //array
    console.log("Array dengan jumlah index 100:", nilaiRandomArray);
    console.log("Array genap dengan jumlah index 50:", arrayGenap);
    console.log("Array ganjil dengan jumlah index 50:", arrayGanjil);

    //Min, Max, Total, dan Rata-rata array
    console.log("Min, Max, Total, Rata-rata genap:");
    console.log("Min:", getMin(arrayGenap));
    console.log("Max:", getMax(arrayGenap));
    console.log("Total:", getTotal(arrayGenap));
    console.log("Rata-rata:", getAverage(arrayGenap));
    
    console.log("Min, Max, Total, Rata-rata ganjil:");
    console.log("Min:", getMin(arrayGanjil));
    console.log("Max:", getMax(arrayGanjil));
    console.log("Total:", getTotal(arrayGanjil));
    console.log("Rata-rata:", getAverage(arrayGanjil));

    // Perbandingan array genap dan ganjil
    console.log("Perbandingan nilai antara array genap dan ganjil:");
    console.log("Min lebih besar pada array:", getMin(arrayGenap) > getMin(arrayGanjil) ? "Genap" : "Ganjil");
    console.log("Max lebih besar pada array:", getMax(arrayGenap) > getMax(arrayGanjil) ? "Genap" : "Ganjil");
    console.log("Total memiliki nilai sama antara array:", getTotal(arrayGenap) === getTotal(arrayGanjil));
    console.log("Rata-rata lebih besar pada array:", getAverage(arrayGenap) > getAverage(arrayGanjil) ? "Genap" : "Ganjil");
}

//fungsi utama
main(3,);