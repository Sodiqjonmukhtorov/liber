import React from "react";
import { GoogleplayIcon } from "@/app/_assets/googleplay-icon";
import { ApplestoreIcon } from "@/app/_assets/applestore-icon";
import { SocialsIcon } from "@/app/_assets/socials-icon";
import { UzcardIcon } from "@/app/_assets/uzcard-icon";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-indigo-300 mt-[93px] pt-[31px] pb-[63px]">
        <div className="container flex gap-[137px] ">
          <ul className="footer__list">
            <h4 className="cursor-pointer">Платформа хақида</h4>
            <li className="cursor-pointer">Liber ўзи нима?</li>
            <li className="cursor-pointer">Фойдаланиш шартлари</li>
            <li className="cursor-pointer">Ёрдам</li>
          </ul>
          <ul className=" flex flex-col gap-[14px]">
            <h4 className="cursor-pointer">Обуна хақида</h4>
            <li className="cursor-pointer">Обуна бўлиш</li>
            <li className="cursor-pointer">Қандай тўлаш</li>
          </ul>
          <ul className="flex flex-col gap-[14px]">
            <h4 className="cursor-pointer">Китоблар</h4>
            <li className="cursor-pointer">Аудио китоблар</li>
            <li className="cursor-pointer">Электрон китоблар</li>
            <li className="cursor-pointer">Китоблар</li>
          </ul>
          <ul className="flex flex-col gap-[14px]">
            <h4 className="cursor-pointer">Мобил илова</h4>
            <a className="cursor-pointer" href="https://play.google.com/store/apps?hl=ru">
            <GoogleplayIcon />
            </a>
<a href="https://www.apple.com/app-store/">
            <ApplestoreIcon />
            </a>
          </ul>
        </div>
      </footer>

      <div className="bg-slate-800 pt-[12px] pb-[33px]">
        <div className="container flex gap-[131px]">
          <ul className="footer__bottom__text">
            <p className="text-white">Ижтимоий тармоқлар</p>
            <div className="flex gap-3 mt-2">
              <SocialsIcon />
              <SocialsIcon />
              <SocialsIcon />
              <SocialsIcon />
            </div>
          </ul>
          <ul className="footer__bottom__text">
            <p className="text-white">Боғланиш</p>
            <li className="text-white"><a href="tel:+998 90 253 77 53">+998 90 253 77 53
              </a> <a href="mailto:support@liber.uz">support@liber.uz</a></li>
          </ul>
          <ul className="footer__bottom__text">
            <p className="text-white">Биз қабул қиламиз</p>
            <div className="flex gap-3">
              <UzcardIcon />
              <UzcardIcon />
              <UzcardIcon />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
