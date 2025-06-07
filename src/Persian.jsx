import React from "react";
import "./Persian.css";
function Persian() {
  return <div className="body Persian" lang="fa" dir="rtl">
      <header>
        <div className="header">
          <div className="cafe_name persian yekan">کافه لوپون</div>
          <div className="logo" />
        </div>
      </header>
      <main className="menu">
        <div className="menu_Section flex">
          <h1 className="Menu_title yekan">قهوه</h1>
          <div className="menu_items">
            <div className="img Espresso">
              <img src="./img/img/Espresso.jpg" alt="اسپرسو" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">اسپرسو</div>
              <div className="item_Description yekan">
                دابل شات / سینگل شات
              </div>
            </div>
          </div>
          <div className="menu_items">
            <div className="img Macchiato">
              <img src="./img/img/Espresso.jpg" alt="اسپرسو ماکیاتو" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">اسپرسو ماکیاتو</div>
              <div className="item_Description yekan">
                دابل شات اسپرسو + فوم شیر
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Flat_White">
              <img src="./img/img/Espresso.jpg" alt="فلت وایت" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">فلت وایت</div>
              <div className="item_Description yekan">اسپرسو + شیر</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Americano">
              <img src="./img/img/Espresso.jpg" alt="آمریکانو" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">آمریکانو</div>
              <div className="item_Description yekan">
                دابل شات اسپرسو + آب گرم
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Cappuccino">
              <img src="./img/img/Espresso.jpg" alt="کاپوچینو" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">کاپوچینو</div>
              <div className="item_Description yekan">
                قهوه + شیر + فوم شیر
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Cortado">
              <img src="./img/img/Espresso.jpg" alt="کورتادو" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">کورتادو</div>
              <div className="item_Description yekan">۱ قهوه + ۱ شیر</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Latte">
              <img src="./img/img/Espresso.jpg" alt="لاته" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">لاته</div>
              <div className="item_Description yekan">
                قهوه + شیر + فوم شیر
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Mochaccino">
              <img src="./img/img/Espresso.jpg" alt="موکاچینو" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">موکاچینو</div>
              <div className="item_Description yekan">
                قهوه + شکلات + شیر + فوم شیر
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Kurdish">
              <img src="./img/img/Espresso.jpg" alt="قهوه کردی" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">قهوه کردی</div>
              <div className="item_Description yekan">قهوه مخصوص کردی</div>
            </div>
          </div>
        </div>

        <div className="menu_Section flex">
          <h1 className="Menu_title yekan">شیک‌ها</h1>
          <div className="menu_items">
            <div className="img Lupon">
              <img src="./img/img/Espresso.jpg" alt="لوپون" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">لوپون</div>
              <div className="item_Description yekan">شیک مخصوص لوپون</div>
            </div>
          </div>
          <div className="menu_items">
            <div className="img Lotus">
              <img src="./img/img/Espresso.jpg" alt="شیک لوتوس" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">شیک لوتوس</div>
              <div className="item_Description yekan">کرم لوتوس</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Peanut_Butter">
              <img src="./img/img/Espresso.jpg" alt="شیک کره بادام زمینی" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">شیک کره بادام زمینی</div>
              <div className="item_Description yekan">کره بادام زمینی</div>
              <div className="caution">
                <i className="fa_solid fa_triangle_exclamation Caution_icon" />هشدار آلرژی
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Nutella">
              <img src="./img/img/Espresso.jpg" alt="شیک نوتلا" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">شیک نوتلا</div>
              <div className="item_Description yekan">شکلات نوتلا</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Milka">
              <img src="./img/img/Espresso.jpg" alt="شیک میلکا" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">شیک میلکا</div>
              <div className="item_Description yekan">شکلات میلکا</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Vanilla">
              <img src="./img/img/Espresso.jpg" alt="شیک وانیل" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">شیک وانیل</div>
              <div className="item_Description yekan">
                بستنی وانیلی + شربت وانیل
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Espresso_shake">
              <img src="./img/img/Espresso.jpg" alt="شیک اسپرسو" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">شیک اسپرسو</div>
              <div className="item_Description yekan">دابل شات اسپرسو</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Saffron">
              <img src="./img/img/Espresso.jpg" alt="شیک زعفران و گلاب" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">شیک زعفران و گلاب</div>
              <div className="item_Description yekan">زعفران + گلاب</div>
            </div>
          </div>
        </div>

        <div className="menu_Section flex">
          <h1 className="Menu_title yekan">اسموتی‌ها</h1>
          <div className="menu_items">
            <div className="img Lupon_Smoothies">
              <img src="./img/img/Espresso.jpg" alt="اسموتی لوپون" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">اسموتی لوپون</div>
              <div className="item_Description yekan">اسموتی مخصوص لوپون</div>
            </div>
          </div>
          <div className="menu_items">
            <div className="img Strawberry">
              <img src="./img/img/Espresso.jpg" alt="توت فرنگی" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">توت فرنگی</div>
              <div className="item_Description yekan">توت فرنگی منجمد</div>
              <div className="item_Description yekan">
                (اختیاری: شکر یا عسل)
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Watermelon">
              <img src="./img/img/Espresso.jpg" alt="هندوانه" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">هندوانه</div>
              <div className="item_Description yekan">هندوانه</div>
              <div className="item_Description yekan">
                (اختیاری: شکر یا عسل)
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Lemon_Strawberry">
              <img src="./img/img/Espresso.jpg" alt="لیمو توت فرنگی" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">لیمو توت فرنگی</div>
              <div className="item_Description yekan">لیمو + توت فرنگی</div>
              <div className="item_Description yekan">
                (اختیاری: شکر یا عسل)
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Watermelon_Strawberry">
              <img src="./img/img/Espresso.jpg" alt="هندوانه توت فرنگی" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">هندوانه توت فرنگی</div>
              <div className="item_Description yekan">
                هندوانه + توت فرنگی
              </div>
              <div className="item_Description yekan">
                (اختیاری: شکر یا عسل)
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Mojito">
              <img src="./img/img/Espresso.jpg" alt="موهیتو" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">موهیتو</div>
              <div className="item_Description yekan">
                لیمو + سودا + اسپرایت + نعناع
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Lemonade">
              <img src="./img/img/Espresso.jpg" alt="لیموناد" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">لیموناد</div>
              <div className="item_Description yekan">
                لیموناد + سودا + اسپرایت
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Lemonade">
              <img src="./img/img/Espresso.jpg" alt="لیموناد زنجبیل" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">لیموناد زنجبیل</div>
              <div className="item_Description yekan">
                لیموناد + زنجبیل + سودا + اسپرایت
              </div>
              <div className="caution">
                <i className="fa_solid fa_triangle_exclamation Caution_icon" />هشدار آلرژی
              </div>
            </div>
          </div>
        </div>

        <div className="menu_Section flex">
          <h1 className="Menu_title yekan">نوشیدنی‌های گرم</h1>
          <div className="menu_items">
            <div className="img Lupon_Hot">
              <img src="./img/img/Espresso.jpg" alt="مخصوص لوپون" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">مخصوص لوپون</div>
              <div className="item_Description yekan">مخصوص لوپون</div>
            </div>
          </div>
          <div className="menu_items">
            <div className="img Echium">
              <img src="./img/img/Espresso.jpg" alt="دمنوش گاوزبان" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">دمنوش گاوزبان</div>
              <div className="item_Description yekan">گاوزبان</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Chill">
              <img src="./img/img/Espresso.jpg" alt="دمنوش آرامش‌بخش" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">دمنوش آرامش‌بخش</div>
              <div className="item_Description yekan">
                گاوزبان + سنبل‌الطیب + به لیمو + لیمو عمانی
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Lemon_Quince">
              <img src="./img/img/Espresso.jpg" alt="دمنوش به لیمو" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">دمنوش به لیمو</div>
              <div className="item_Description yekan">به لیمو</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Ginger">
              <img src="./img/img/Espresso.jpg" alt="دمنوش زنجبیل" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">دمنوش زنجبیل</div>
              <div className="item_Description yekan">زنجبیل</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Bitter_Orange">
              <img src="./img/img/Espresso.jpg" alt="دمنوش چای ترش" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">دمنوش چای ترش</div>
              <div className="item_Description yekan">
                چای ترش + نسترن کوهی
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Fit_Herbal">
              <img src="./img/img/Espresso.jpg" alt="دمنوش فیت" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">دمنوش فیت</div>
              <div className="item_Description yekan">
                نعناع + رزماری + کاکوتی + پونه
              </div>
              <div className="caution">
                <i className="fa_solid fa_triangle_exclamation Caution_icon" />هشدار آلرژی
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Lahijan_Chai">
              <img src="./img/img/Espresso.jpg" alt="چای لاهیجان" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">چای لاهیجان</div>
              <div className="item_Description yekan">چای لاهیجان</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Masala_Chai">
              <img src="./img/img/Espresso.jpg" alt="چای ماسالا" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">چای ماسالا</div>
              <div className="item_Description yekan">پودر ماسالا + شیر</div>
              <div className="caution">
                <i className="fa_solid fa_triangle_exclamation Caution_icon" />هشدار آلرژی
              </div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Matcha_Latte">
              <img src="./img/img/Espresso.jpg" alt="ماچا لاته" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">ماچا لاته</div>
              <div className="item_Description yekan">پودر ماچا + شیر</div>
            </div>
          </div>

          <div className="menu_items">
            <div className="img Hot_Chocolate">
              <img src="./img/img/Espresso.jpg" alt="هات چاکلت" className="imgtag" />
            </div>
            <div className="item_text">
              <div className="item_title yekan">هات چاکلت</div>
              <div className="item_Description yekan">پودر شکلات + شیر</div>
            </div>
          </div>
        </div>
      </main>
    </div>;
}

export default Persian;
