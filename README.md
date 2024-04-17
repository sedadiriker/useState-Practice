## useState Hook

`useState` hook'u, React bileşenlerinde durum yönetimi için kullanılan bir fonksiyondur. Bu hook, bir bileşenin içinde değişkenleri tanımlamanıza ve bu değişkenlerin değerlerini güncellemenize olanak tanır.

### Kullanımı

```jsx
import React, { useState } from 'react';

function ExampleComponent() {
  // useState hook'u kullanarak bir durum değişkeni tanımlama
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Butona tıklandığında setCount fonksiyonunu kullanarak count değişkeninin değerini güncelleme */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
Yukarıdaki örnekte, `useState`  hook'u kullanılarak bir count adında bir durum değişkeni tanımlanmıştır. `useState`  fonksiyonuna başlangıç değeri olarak 0 verilmiştir. Daha sonra, butona tıklandığında setCount fonksiyonu kullanılarak count değişkeninin değeri artırılmıştır.

### Parametreler

`useState` fonksiyonu bir başlangıç değeri alır ve bu değeri başlangıç durum değeri olarak kullanır. Fonksiyon, bir dizi içinde iki öğe döndürür: mevcut durum değeri ve bu değeri güncellemek için kullanılan bir fonksiyon.

```jsx
const [state, setState] = useState(initialState);
```
- `initialState`: Başlangıç durum değeri. İlk render sırasında bileşenin durumu bu değerle başlar.


### Notlar

- `useState` hook'u, sadece işlev bileşenlerinde kullanılabilir. Sınıf bileşenlerinde kullanılamaz.
- Her render sırasında `useState` çağrıldığında, aynı sırayla dönen değerler, aynı bileşenin farklı çağrıları arasında bağımsızdır. Bu, farklı hook çağrılarında aynı indeksi kullanan birden fazla `useState` çağrısı yapabilirsiniz.
