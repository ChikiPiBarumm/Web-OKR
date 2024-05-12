function dialogueWithUser() {
    var userName = prompt("Привіт! Як вас звати?");
    
    if (userName) {
        alert("Приємно познайомитися, " + userName + "!");
        
        var favoritePlane = prompt("Який ваш улюблений літак?");
        
        if (favoritePlane) {
            alert("Цікавий вибір, " + userName + "! " + favoritePlane + " - чудовий літак.");
        } else {
            alert("Ви не вказали свій улюблений літак. Можливо, мій сайт допоможе вам вибрати!");
        }
    } else {
        alert("Жаль, що ви не хочете розкрити своє ім'я. Гарного дня!");
    }
}

function displayDeveloperInfo(lastName, firstName, position = "Розробник") {
        alert("Прізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
    }

function compareAndAlert() {
            var str1 = document.getElementById("str1").value;
            var str2 = document.getElementById("str2").value;

            if (str1 > str2) {
                alert(str1 + " більший за " + str2);
            } else if (str2 > str1) {
                alert(str2 + " більший за " + str1);
            } else {
                alert("Рядки рівні.");
            }
        }

function changeBackground() {
            document.body.style.backgroundColor = "lightblue";
            
            setTimeout(function() {
                document.body.style.backgroundColor = "";
            }, 5000);
        }

function redirect() {
    var confirmation = confirm("Ви впевнені, що хочете перейти на нову сторінку?");
    if (confirmation) {
        location.href = "https://www.w3schools.com/js/default.asp";
    }
}

function linkRecolor(color) {
    document.querySelectorAll('.recolor-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var color = this.getAttribute('data-color');
                var links = document.querySelectorAll('ul > li > a');
                links.forEach(function(link) {
                    link.style.color = color;
                });
            });
        });
}

function propertiesDom(option){
        var testPlaneSection = document.getElementById("testplane");

        if (option === "inner")
            testPlaneSection.innerHTML = "<h2>Новий літак</h2><p>Ця секція була створена innerHTML.</p>";

        else if (option === "outer")
            testPlaneSection.outerHTML = "<section id='newPlane'><h2>Змінена назва літака</h2><p>Ця секція була створена outerHTML.</p></section>";

        else if (option === "heading") {
            var h2Node = document.querySelector("#newPlane h2");
            var textNode = h2Node.childNodes[0];
            textNode.nodeValue = "Нова назва літака створена nodeValue";
        }

        else if (option === "content") {
            var pElement = document.querySelector("#newPlane p");
            pElement.textContent = "Новий опис літака створений textContent.";
        }
}

function manipulateDocument(condition) {
    // Внесення змін за допомогою document.write
    /*if (condition === 'write') {
        document.write("<h3>Додаткові відомості</h3>");
        document.write("<p>Це додатковий текст, доданий за допомогою document.write.</p>");
    }*/
        
    if (condition === 'write') {
        var h3Element = document.createElement("h3");
        var h3Text = document.createTextNode("Додаткові відомості");
        h3Element.appendChild(h3Text);

        var pElement = document.createElement("p");
        var pText = document.createTextNode("Це додатковий текст, доданий за допомогою document.write.");
        pElement.appendChild(pText);

        document.body.appendChild(h3Element);
        document.body.appendChild(pElement);
    }
    // Створення нових елементів та текстового вузла
    else if (condition === 'createElement') {
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode("Текст у новому елементі");
        newDiv.appendChild(newContent);
        document.body.append(newDiv);
    }
    // Видалення кнопки "Додаткові ресурси" за допомогою методу remove()
    else if (condition === 'removeButton') {
        var button = document.querySelector("nav ul.menu li:last-child");
        button.remove();
    }
    // Зміна тексту заголовку h1 за допомогою заміни вмісту текстовим вузлом
    else if (condition === 'replaceText') {
        var h1Element = document.querySelector("h1");
        var newH1Element = document.createElement("h1");
        newH1Element.textContent = "Оновлений заголовок";
        h1Element.replaceWith(newH1Element);
    }
    // Додавання нового пункту списку
    else if (condition === 'addListItem') {
        var newListItem = document.createElement("li");
        var newListItemText = document.createTextNode("Новий пункт списку");
        newListItem.appendChild(newListItemText);
        var lastListItem = document.querySelector("ul").lastElementChild;
        lastListItem.after(newListItem);
    }
    // Додавання нового розділу перед другим заголовком h2
    else if (condition === 'addSection') {
        var newSection = document.createElement("section");
        var newSectionText = document.createTextNode("Новий розділ");
        newSection.appendChild(newSectionText);
        var secondH2 = document.querySelectorAll("h2")[1];
        secondH2.before(newSection);
    }
}