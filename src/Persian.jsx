import React from "react";

function Persian() {
  return <html>
      <head>
        <meta charset="UTF_8" />
        <link rel="stylesheet" href="./Styles/Style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font_awesome/6.0.0_beta3/css/all.min.css" />
      </head>

      <body lang="fa" dir="rtl">
        <header>
          <div class="header">
            <div class="cafe_name">کافه لوپون</div>
            <div class="logo" />
          </div>
        </header>
        <main class="menu">
          <div class="menu_Section flex">
            <h1 class="Menu_title">قهوه</h1>
            <div class="menu_items">
              <div class="img Espresso">
                <img src="./Styles/img/img/Espresso.jpg" alt="اسپرسو" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">اسپرسو</div>
                <div class="item_Description">دابل شات / سینگل شات</div>
              </div>
            </div>
            <div class="menu_items">
              <div class="img Macchiato">
                <img src="./Styles/img/img/Espresso.jpg" alt="اسپرسو ماکیاتو" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">اسپرسو ماکیاتو</div>
                <div class="item_Description">دابل شات اسپرسو + فوم شیر</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Flat_White">
                <img src="./Styles/img/img/Espresso.jpg" alt="فلت وایت" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">فلت وایت</div>
                <div class="item_Description">اسپرسو + شیر</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Americano">
                <img src="./Styles/img/img/Espresso.jpg" alt="آمریکانو" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">آمریکانو</div>
                <div class="item_Description">دابل شات اسپرسو + آب گرم</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Cappuccino">
                <img src="./Styles/img/img/Espresso.jpg" alt="کاپوچینو" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">کاپوچینو</div>
                <div class="item_Description">قهوه + شیر + فوم شیر</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Cortado">
                <img src="./Styles/img/img/Espresso.jpg" alt="کورتادو" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">کورتادو</div>
                <div class="item_Description">۱ قهوه + ۱ شیر</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Latte">
                <img src="./Styles/img/img/Espresso.jpg" alt="لاته" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">لاته</div>
                <div class="item_Description">قهوه + شیر + فوم شیر</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Mochaccino">
                <img src="./Styles/img/img/Espresso.jpg" alt="موکاچینو" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">موکاچینو</div>
                <div class="item_Description">
                  قهوه + شکلات + شیر + فوم شیر
                </div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Kurdish">
                <img src="./Styles/img/img/Espresso.jpg" alt="قهوه کردی" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">قهوه کردی</div>
                <div class="item_Description">قهوه مخصوص کردی</div>
              </div>
            </div>
          </div>

          <div class="menu_Section flex">
            <h1 class="Menu_title">شیک‌ها</h1>
            <div class="menu_items">
              <div class="img Lupon">
                <img src="./Styles/img/img/Espresso.jpg" alt="لوپون" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">لوپون</div>
                <div class="item_Description">شیک مخصوص لوپون</div>
              </div>
            </div>
            <div class="menu_items">
              <div class="img Lotus">
                <img src="./Styles/img/img/Espresso.jpg" alt="شیک لوتوس" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">شیک لوتوس</div>
                <div class="item_Description">کرم لوتوس</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Peanut_Butter">
                <img src="./Styles/img/img/Espresso.jpg" alt="شیک کره بادام زمینی" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">شیک کره بادام زمینی</div>
                <div class="item_Description">کره بادام زمینی</div>
                <div class="caution">
                  <i class="fa_solid fa_triangle_exclamation Caution_icon" />هشدار آلرژی
                </div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Nutella">
                <img src="./Styles/img/img/Espresso.jpg" alt="شیک نوتلا" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">شیک نوتلا</div>
                <div class="item_Description">شکلات نوتلا</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Milka">
                <img src="./Styles/img/img/Espresso.jpg" alt="شیک میلکا" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">شیک میلکا</div>
                <div class="item_Description">شکلات میلکا</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Vanilla">
                <img src="./Styles/img/img/Espresso.jpg" alt="شیک وانیل" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">شیک وانیل</div>
                <div class="item_Description">بستنی وانیلی + شربت وانیل</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Espresso_shake">
                <img src="./Styles/img/img/Espresso.jpg" alt="شیک اسپرسو" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">شیک اسپرسو</div>
                <div class="item_Description">دابل شات اسپرسو</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Saffron">
                <img src="./Styles/img/img/Espresso.jpg" alt="شیک زعفران و گلاب" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">شیک زعفران و گلاب</div>
                <div class="item_Description">زعفران + گلاب</div>
              </div>
            </div>
          </div>

          <div class="menu_Section flex">
            <h1 class="Menu_title">اسموتی‌ها</h1>
            <div class="menu_items">
              <div class="img Lupon_Smoothies">
                <img src="./Styles/img/img/Espresso.jpg" alt="اسموتی لوپون" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">اسموتی لوپون</div>
                <div class="item_Description">اسموتی مخصوص لوپون</div>
              </div>
            </div>
            <div class="menu_items">
              <div class="img Strawberry">
                <img src="./Styles/img/img/Espresso.jpg" alt="توت فرنگی" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">توت فرنگی</div>
                <div class="item_Description">توت فرنگی منجمد</div>
                <div class="item_description">(اختیاری: شکر یا عسل)</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Watermelon">
                <img src="./Styles/img/img/Espresso.jpg" alt="هندوانه" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">هندوانه</div>
                <div class="item_Description">هندوانه</div>
                <div class="item_description">(اختیاری: شکر یا عسل)</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Lemon_Strawberry">
                <img src="./Styles/img/img/Espresso.jpg" alt="لیمو توت فرنگی" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">لیمو توت فرنگی</div>
                <div class="item_Description">لیمو + توت فرنگی</div>
                <div class="item_description">(اختیاری: شکر یا عسل)</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Watermelon_Strawberry">
                <img src="./Styles/img/img/Espresso.jpg" alt="هندوانه توت فرنگی" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">هندوانه توت فرنگی</div>
                <div class="item_Description">هندوانه + توت فرنگی</div>
                <div class="item_description">(اختیاری: شکر یا عسل)</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Mojito">
                <img src="./Styles/img/img/Espresso.jpg" alt="موهیتو" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">موهیتو</div>
                <div class="item_Description">
                  لیمو + سودا + اسپرایت + نعناع
                </div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Lemonade">
                <img src="./Styles/img/img/Espresso.jpg" alt="لیموناد" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">لیموناد</div>
                <div class="item_Description">لیموناد + سودا + اسپرایت</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Lemonade">
                <img src="./Styles/img/img/Espresso.jpg" alt="لیموناد زنجبیل" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">لیموناد زنجبیل</div>
                <div class="item_Description">
                  لیموناد + زنجبیل + سودا + اسپرایت
                </div>
                <div class="caution">
                  <i class="fa_solid fa_triangle_exclamation Caution_icon" />هشدار آلرژی
                </div>
              </div>
            </div>
          </div>

          <div class="menu_Section flex">
            <h1 class="Menu_title">نوشیدنی‌های گرم</h1>
            <div class="menu_items">
              <div class="img Lupon_Hot">
                <img src="./Styles/img/img/Espresso.jpg" alt="مخصوص لوپون" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">مخصوص لوپون</div>
                <div class="item_Description">مخصوص لوپون</div>
              </div>
            </div>
            <div class="menu_items">
              <div class="img Echium">
                <img src="./Styles/img/img/Espresso.jpg" alt="دمنوش گاوزبان" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">دمنوش گاوزبان</div>
                <div class="item_Description">گاوزبان</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Chill">
                <img src="./Styles/img/img/Espresso.jpg" alt="دمنوش آرامش‌بخش" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">دمنوش آرامش‌بخش</div>
                <div class="item_Description">
                  گاوزبان + سنبل‌الطیب + به لیمو + لیمو عمانی
                </div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Lemon_Quince">
                <img src="./Styles/img/img/Espresso.jpg" alt="دمنوش به لیمو" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">دمنوش به لیمو</div>
                <div class="item_Description">به لیمو</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Ginger">
                <img src="./Styles/img/img/Espresso.jpg" alt="دمنوش زنجبیل" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">دمنوش زنجبیل</div>
                <div class="item_Description">زنجبیل</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Bitter_Orange">
                <img src="./Styles/img/img/Espresso.jpg" alt="دمنوش چای ترش" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">دمنوش چای ترش</div>
                <div class="item_Description">چای ترش + نسترن کوهی</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Fit_Herbal">
                <img src="./Styles/img/img/Espresso.jpg" alt="دمنوش فیت" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">دمنوش فیت</div>
                <div class="item_Description">
                  نعناع + رزماری + کاکوتی + پونه
                </div>
                <div class="caution">
                  <i class="fa_solid fa_triangle_exclamation Caution_icon" />هشدار آلرژی
                </div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Lahijan_Chai">
                <img src="./Styles/img/img/Espresso.jpg" alt="چای لاهیجان" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">چای لاهیجان</div>
                <div class="item_Description">چای لاهیجان</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Masala_Chai">
                <img src="./Styles/img/img/Espresso.jpg" alt="چای ماسالا" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">چای ماسالا</div>
                <div class="item_Description">پودر ماسالا + شیر</div>
                <div class="caution">
                  <i class="fa_solid fa_triangle_exclamation Caution_icon" />هشدار آلرژی
                </div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Matcha_Latte">
                <img src="./Styles/img/img/Espresso.jpg" alt="ماچا لاته" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">ماچا لاته</div>
                <div class="item_Description">پودر ماچا + شیر</div>
              </div>
            </div>

            <div class="menu_items">
              <div class="img Hot_Chocolate">
                <img src="./Styles/img/img/Espresso.jpg" alt="هات چاکلت" class="" />
              </div>
              <div class="item_text">
                <div class="item_title">هات چاکلت</div>
                <div class="item_Description">پودر شکلات + شیر</div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>;
}

export default Persian;
