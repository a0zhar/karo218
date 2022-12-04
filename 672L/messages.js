var englishMessages = {
    GoldHenV212:            "GoldHen v2.1.2 By SiSTRO", 
    GoldHenV224:            "GoldHen v2.2.4 By SiSTRO", 
    Hen_v213:               "HEN 2.1.3 By SiSTRO", 
    Hen_v213b:              "HEN 2.1.3 By SiSTRO & Leeful", 
    CheatCopy:              "Copy json and shn files from USB to PS4", 
    BinLoader:              "Loads a bin file sent to the PS4 IP address on port 9021", 
    FTP:                    "A full access FTP server for the PS4", 
    WebRTE:                 "A large collection of trainers for your PS4 games", 
    PS4debug:               "Save Data Mounter", 
    OrbisToolbox:           "Orbis Toolbox Loader Alfa 1190", 
    App2USB:                "Move installed games to an external USB drive", 
    DisableUpdate:          "Creates dummy files in the PS4 update folder", 
    EnableUpdate:           "Removes the dummy files in the PS4 update folder", 
    HistoryBlocker:         "Disable the auto opening of the last page used in the PS4 WebBrowser", 
    ToDex:                  "unlocks some debug features available on testkit", 
    DumpG:                  "Dump Game only to a USB drive to be able to create fpkg files", 
    DumpU:                  "Dump Update Game only to a USB drive to be able to create fpkg files", 
    DumpGU:                 "Dump Game+Update to a USB drive to be able to create fpkg files", 
    DumpGUM:                "Dump Game+Update Merged to a USB drive to be able to create fpkg files", 
};

var russianMessages = {
    GoldHenV212:             "GoldHen v2.1.2 By SiSTRO", 
    GoldHenV224:             "GoldHen v2.2.4 By SiSTRO", 
    Hen_v213:                "HEN 2.1.3 By SiSTRO", 
    Hen_v213b:               "HEN 2.1.3 By SiSTRO & Leeful", 
    CheatCopy:               "Копирование json и shn файлов с USB на PS4", 
    BinLoader:               "Загружает bin-файл, отправленный на IP-адрес PS4 по порту 9021", 
    FTP:                     "FTP-сервер с полным доступом для PS4", 
    WebRTE:                  "Большая коллекция трейнеров для ваших игр PS4", 
    PS4debug:                "Save Data Mounter", 
    OrbisToolbox:            "Orbis Toolbox Loader Alfa 1190", 
    App2USB:                 "Перемещение установленных игр на внешний USB-накопитель", 
    DisableUpdate:           "Создает фиктивные файлы в папке обновлений PS4", 
    EnableUpdate:            "Удаляет фиктивные файлы в папке обновлений PS4", 
    HistoryBlocker:          "Отключение автоматического открытия последней используемой страницы в веб-браузере PS4", 
    ToDex:                   "Разблокирует некоторые функции отладки, доступные на testkit", 
    DumpG:                   "Сбрасывать игру только на USB-накопитель, чтобы иметь возможность создавать файлы fpkg", 
    DumpU:                   "Сбрасывать обновление игры только на USB-накопитель, чтобы иметь возможность создавать fpkg-файлы", 
    DumpGU:                  "Сбросить игру+обновление на USB-накопитель, чтобы иметь возможность создавать fpkg-файлы", 
    DumpGUM:                 "Слить игру+обновление слитно на USB-накопитель, чтобы иметь возможность создавать fpkg-файлы",  
};
document.getElementById("lang_en").addEventListener("click", function () {
  document.querySelectorAll("[data-msgname]").forEach((e) => {
    var arrind = e.getAttribute("data-msgname");
    e.setAttribute("data-myinfo", englishMessages[arrind]);
  });
  document.getElementById("langbar").innerHTML="English";
  document.getElementById("thankslbl").innerHTML="Super Special Thanks to Karo Sharifi, Sleirsgoevy, SiSTRo";
  document.getElementById("speciallbl").innerHTML="and ps4krar for being the first to fork my repo";
});
document.getElementById("lang_ru").addEventListener("click", function () {
  document.querySelectorAll("[data-msgname]").forEach((e) => {
    var arrind = e.getAttribute("data-msgname");
    e.setAttribute("data-myinfo", russianMessages[arrind]);
  });
  document.getElementById("langbar").innerHTML="Russian";
  document.getElementById("thankslbl").innerHTML="Отдельное спасибо Karo Sharifi, Sleirsgoevy, SiSTRo";
  document.getElementById("speciallbl").innerHTML="и ps4krar за то, что первым форкнул мое репо.";
});
/*
document.querySelectorAll("[data-myinfo]").forEach((e) => {
  var tmpname = e.innerHTML;
  tmpname = tmpname.replace(/\+/g, "");
  tmpname = tmpname.replace(/\s+/g, "");
  tmpname = tmpname.replace(/\./g, "");
  e.setAttribute("data-msgname", tmpname);
});

*/