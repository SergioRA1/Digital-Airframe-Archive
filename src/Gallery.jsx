import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, m, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Image as ImageIcon,
  Maximize2,
  X,
} from "lucide-react";

import { captions, galleryText } from "./data/gallery.js";
import { localise, useTerm, useText } from "./i18n.js";
import { LanguageSwitch } from "./Layout.jsx";
import { photos } from "./photos.js";
import { srcSet } from "./imageSizes.js";

const text = {
  en: {
    returnToArchive: "Return to archive",
    visualArchive: "Visual archive",
    publicPhotography: "Public photography",
    photographicRecord: "Photographic record",
    inFrame: "IN FRAME",
    exploreImages: "Explore images",
    selectedPhotographs: "Selected photographs",
    attributedMedia: "Attributed media",
    fullScreenViewer: "Full-screen viewer",
    open: (title) => `Open ${title}`,
    cardAlt: (name, title) => `${name}: ${title}`,
    image: "Image",
    clickToExpand: "Click to expand",
    record: "Record",
    photographer: "Photographer",
    licence: "Licence",
    viewSource: "View original source",
    expanded: (title) => `Expanded photograph: ${title}`,
    expandedAlt: (name, title) => `Expanded ${name} photograph: ${title}`,
    closeImage: "Close image",
    previousImage: "Previous image",
    nextImage: "Next image",
    selectedPhotography: "01 / Selected photography",
    publicAppearances: "Public appearances of the airframe.",
    viewerHelp:
      "Select any photograph to open the full-screen viewer. Use the left and right arrow keys to move between records. Press Escape to close the viewer.",
    mediaNotice: "02 / Media notice",
    imagesWithAttribution: "Images with attribution.",
    credits:
      "These photographs are loaded from Wikimedia Commons and remain the work of their respective photographer. Attribution, licensing information and original source links are displayed with every photograph.",
    concept: "Independent educational design concept",
    madeBy: "Made by",
  },
  es: {
    returnToArchive: "Volver al archivo",
    visualArchive: "Archivo visual",
    publicPhotography: "Fotografía pública",
    photographicRecord: "Registro fotográfico",
    inFrame: "EN IMAGEN",
    exploreImages: "Ver imágenes",
    selectedPhotographs: "Fotografías seleccionadas",
    attributedMedia: "Material con atribución",
    fullScreenViewer: "Visor a pantalla completa",
    open: (title) => `Abrir ${title}`,
    cardAlt: (name, title) => `${name}: ${title}`,
    image: "Imagen",
    clickToExpand: "Clic para ampliar",
    record: "Registro",
    photographer: "Fotógrafo",
    licence: "Licencia",
    viewSource: "Ver fuente original",
    expanded: (title) => `Fotografía ampliada: ${title}`,
    expandedAlt: (name, title) => `Fotografía ampliada de ${name}: ${title}`,
    closeImage: "Cerrar imagen",
    previousImage: "Imagen anterior",
    nextImage: "Imagen siguiente",
    selectedPhotography: "01 / Fotografías seleccionadas",
    publicAppearances: "Apariciones públicas de la célula.",
    viewerHelp:
      "Selecciona una fotografía para abrir el visor a pantalla completa. Las flechas izquierda y derecha del teclado permiten moverse entre registros. La tecla Escape cierra el visor.",
    mediaNotice: "02 / Aviso sobre las imágenes",
    imagesWithAttribution: "Imágenes con atribución.",
    credits:
      "Estas fotografías se cargan desde Wikimedia Commons y siguen siendo obra de sus respectivos fotógrafos. Con cada fotografía se muestran la atribución, la información de licencia y los enlaces a la fuente original.",
    concept: "Concepto independiente de diseño con fines educativos",
    madeBy: "Hecho por",
  },
};

// A photograph's id, number and photo credits live here. Its caption is
// written in src/data/gallery.js under the same id.
const entry = (id, number, photo) => ({
  id,
  number,
  src: photo.src,
  full: photo.full,
  position: "center center",
  photographer: photo.photographer,
  licence: photo.licence,
  source: photo.source,
});

const j20Images = [
  {
    id: "airshow-2016",
    number: "01",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/J-20_at_Airshow_China_2016.jpg/1280px-J-20_at_Airshow_China_2016.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/a/a2/J-20_at_Airshow_China_2016.jpg",
    position: "center center",
    photographer: "Alert5",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:J-20_at_Airshow_China_2016.jpg",
  },
  {
    id: "formation-2016",
    number: "02",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/J-20s.jpg/1280px-J-20s.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/9/96/J-20s.jpg",
    position: "center center",
    photographer: "Alert5",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:J-20s.jpg",
  },
  {
    id: "airframe-2017",
    number: "03",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/J-20_%28cropped%29.jpg/1280px-J-20_%28cropped%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/7/7b/J-20_%28cropped%29.jpg",
    position: "center center",
    photographer: "Alert5",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:J-20_%28cropped%29.jpg",
  },
  {
    id: "crossing-2018",
    number: "04",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/J-20_formation_%28cropped%29.jpg/1280px-J-20_formation_%28cropped%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/J-20_formation_%28cropped%29.jpg/1920px-J-20_formation_%28cropped%29.jpg",
    position: "center center",
    photographer: "emperornie",
    licence: "CC BY-SA 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:J-20_formation_%28cropped%29.jpg",
  },
  {
    id: "pair-2022",
    number: "05",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg/1280px-Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg/1920px-Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg",
    position: "center center",
    photographer: "N509FZ",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg",
  },
  {
    id: "static-2025",
    number: "06",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/J-20_at_Changchun_Air_Show_20250921.jpg/1280px-J-20_at_Changchun_Air_Show_20250921.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/J-20_at_Changchun_Air_Show_20250921.jpg/1920px-J-20_at_Changchun_Air_Show_20250921.jpg",
    position: "center center",
    photographer: "Yiyuanju",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:J-20_at_Changchun_Air_Show_20250921.jpg",
  },
  entry("j20-g7", "07", photos.j20_g7),
  entry("j20-g8", "08", photos.j20_g8),
  entry("j20-g9", "09", photos.j20_g9),
  entry("j20-g10", "10", photos.j20_g10),
];

const f22Images = [
  {
    id: "kadena-2009",
    number: "01",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/F-22_Raptor_edit1.jpg/1280px-F-22_Raptor_edit1.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/F-22_Raptor_edit1.jpg/1920px-F-22_Raptor_edit1.jpg",
    position: "center center",
    photographer: "Master Sgt. Andy Dunaway, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_Raptor_edit1.jpg",
  },
  {
    id: "column-2005",
    number: "02",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg/1280px-Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg/1920px-Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg",
    position: "center center",
    photographer: "Tech. Sgt. Ben Bloker, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg",
  },
  {
    id: "bays-2008",
    number: "03",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/F-22_Raptor_shows_its_weapon_bay.jpg/1280px-F-22_Raptor_shows_its_weapon_bay.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/F-22_Raptor_shows_its_weapon_bay.jpg/1920px-F-22_Raptor_shows_its_weapon_bay.jpg",
    position: "center center",
    photographer: "Edward I. Fagg, U.S. Navy",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_Raptor_shows_its_weapon_bay.jpg",
  },
  {
    id: "twilight-2019",
    number: "04",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg/1280px-F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg/1920px-F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg",
    position: "center center",
    photographer: "2nd Lt. Samuel Eckholm, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg",
  },
  {
    id: "formation-2013",
    number: "05",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/F-22_of_43rd_FS.jpg/1280px-F-22_of_43rd_FS.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/F-22_of_43rd_FS.jpg/1920px-F-22_of_43rd_FS.jpg",
    position: "center center",
    photographer: "Master Sgt. J. Wilcox, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_of_43rd_FS.jpg",
  },
  {
    id: "langley-2023",
    number: "06",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg/1280px-F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg/1920px-F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg",
    position: "center center",
    photographer: "Senior Airman Chloe Shanes, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg",
  },
  entry("f22-g7", "07", photos.f22_g7),
  entry("f22-g8", "08", photos.f22_g8),
  entry("f22-g9", "09", photos.f22_g9),
  entry("f22-g10", "10", photos.f22_g10),
];


const f35Images = [
  {
    id: "climb-2018",
    number: "01",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/1280px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/1920px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg",
    position: "center center",
    photographer: "Airman 1st Class Alexander Cook, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg",
  },
  {
    id: "landing-2017",
    number: "02",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/USAF_F-35A_Lightning_II_Landing_3.jpg/1280px-USAF_F-35A_Lightning_II_Landing_3.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/USAF_F-35A_Lightning_II_Landing_3.jpg/1920px-USAF_F-35A_Lightning_II_Landing_3.jpg",
    position: "center center",
    photographer: "Noah Wulf",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:USAF_F-35A_Lightning_II_Landing_3.jpg",
  },
  {
    id: "coalition-2020",
    number: "03",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Enduring_Lightning_II_200802-F-BT522-0460.jpg/1280px-Enduring_Lightning_II_200802-F-BT522-0460.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Enduring_Lightning_II_200802-F-BT522-0460.jpg/1920px-Enduring_Lightning_II_200802-F-BT522-0460.jpg",
    position: "center center",
    photographer: "Master Sgt. Patrick O'Reilly, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:Enduring_Lightning_II_200802-F-BT522-0460.jpg",
  },
  {
    id: "tr3-2023",
    number: "04",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg/1280px-F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg/1920px-F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg",
    position: "center center",
    photographer: "U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg",
  },
  {
    id: "aeroindia-2023",
    number: "05",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg/1280px-Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg/1920px-Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg",
    position: "center center",
    photographer: "Ashwin Kumar",
    licence: "CC BY-SA 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg",
  },
  {
    id: "redflag-2025",
    number: "06",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg/1280px-F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg/1920px-F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg",
    position: "center center",
    photographer: "Micah Garbarino, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg",
  },
  entry("f35-g7", "07", photos.f35_g7),
  entry("f35-g8", "08", photos.f35_g8),
  entry("f35-g9", "09", photos.f35_g9),
  entry("f35-g10", "10", photos.f35_g10),
];

const su57Images = [
  {
    id: "flight-2019",
    number: "01",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%D0%A1%D1%83-57.jpg/1280px-%D0%A1%D1%83-57.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%D0%A1%D1%83-57.jpg/1920px-%D0%A1%D1%83-57.jpg",
    position: "center center",
    photographer: "Vladislav06112019",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:%D0%A1%D1%83-57.jpg",
  },
  {
    id: "taxi-2024",
    number: "02",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Su-57_054%40TYN_%2820241104112740%29.jpg/1280px-Su-57_054%40TYN_%2820241104112740%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Su-57_054%40TYN_%2820241104112740%29.jpg/1920px-Su-57_054%40TYN_%2820241104112740%29.jpg",
    position: "center center",
    photographer: "N509FZ",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Su-57_054%40TYN_%2820241104112740%29.jpg",
  },
  {
    id: "takeoff-2024",
    number: "03",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Su-57_054%40TYN_%2820241104112819%29.jpg/1280px-Su-57_054%40TYN_%2820241104112819%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Su-57_054%40TYN_%2820241104112819%29.jpg/1920px-Su-57_054%40TYN_%2820241104112819%29.jpg",
    position: "center center",
    photographer: "N509FZ",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Su-57_054%40TYN_%2820241104112819%29.jpg",
  },
  {
    id: "landing-2024",
    number: "04",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Su-57_054%40TYN_%2820241121145844%29.jpg/1280px-Su-57_054%40TYN_%2820241121145844%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Su-57_054%40TYN_%2820241121145844%29.jpg/1920px-Su-57_054%40TYN_%2820241121145844%29.jpg",
    position: "center center",
    photographer: "N509FZ",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Su-57_054%40TYN_%2820241121145844%29.jpg",
  },
  {
    id: "maks-2015",
    number: "05",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/PAK_FA_Prandtl_Glauert_singularity.jpg/1280px-PAK_FA_Prandtl_Glauert_singularity.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/PAK_FA_Prandtl_Glauert_singularity.jpg/1920px-PAK_FA_Prandtl_Glauert_singularity.jpg",
    position: "center center",
    photographer: "Rulexip",
    licence: "CC BY-SA 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:PAK_FA_Prandtl_Glauert_singularity.jpg",
  },
  {
    id: "lineup-maks",
    number: "06",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pak-fa-and-berkut-mill-group.jpg/1280px-Pak-fa-and-berkut-mill-group.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pak-fa-and-berkut-mill-group.jpg/1920px-Pak-fa-and-berkut-mill-group.jpg",
    position: "center center",
    photographer: "Rulexip",
    licence: "CC BY-SA 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Pak-fa-and-berkut-mill-group.jpg",
  },
  entry("su57-g7", "07", photos.su57_g7),
  entry("su57-g8", "08", photos.su57_g8),
  entry("su57-g9", "09", photos.su57_g9),
  entry("su57-g10", "10", photos.su57_g10),
];

const f16Images = [
  entry("f16-g1", "01", photos.f16_g1),
  entry("f16-g2", "02", photos.f16_g2),
  entry("f16-g3", "03", photos.f16_g3),
  entry("f16-g4", "04", photos.f16_g4),
  entry("f16-g5", "05", photos.f16_g5),
  entry("f16-g6", "06", photos.f16_g6),
  entry("f16-g7", "07", photos.f16_g7),
  entry("f16-g8", "08", photos.f16_g8),
  entry("f16-g9", "09", photos.f16_g9),
  entry("f16-g10", "10", photos.f16_g10),
];

const typhoonImages = [
  entry("ty-g1", "01", photos.ty_g1),
  entry("ty-g2", "02", photos.ty_g2),
  entry("ty-g3", "03", photos.ty_g3),
  entry("ty-g4", "04", photos.ty_g4),
  entry("ty-g5", "05", photos.ty_g5),
  entry("ty-g6", "06", photos.ty_g6),
  entry("typhoon-g7", "07", photos.typhoon_g7),
  entry("typhoon-g8", "08", photos.typhoon_g8),
  entry("typhoon-g9", "09", photos.typhoon_g9),
  entry("typhoon-g10", "10", photos.typhoon_g10),
];

const rafaleImages = [
  entry("rf-g1", "01", photos.rf_g1),
  entry("rf-g2", "02", photos.rf_g2),
  entry("rf-g3", "03", photos.rf_g3),
  entry("rf-g4", "04", photos.rf_g4),
  entry("rf-g5", "05", photos.rf_g5),
  entry("rf-g6", "06", photos.rf_g6),
  entry("rafale-g7", "07", photos.rafale_g7),
  entry("rafale-g8", "08", photos.rafale_g8),
  entry("rafale-g9", "09", photos.rafale_g9),
  entry("rafale-g10", "10", photos.rafale_g10),
];

const gripenImages = [
  entry("gr-g1", "01", photos.gr_g1),
  entry("gr-g2", "02", photos.gr_g2),
  entry("gr-g3", "03", photos.gr_g3),
  entry("gr-g4", "04", photos.gr_g4),
  entry("gr-g5", "05", photos.gr_g5),
  entry("gr-g6", "06", photos.gr_g6),
  entry("gripen-g7", "07", photos.gripen_g7),
  entry("gripen-g8", "08", photos.gripen_g8),
  entry("gripen-g9", "09", photos.gripen_g9),
  entry("gripen-g10", "10", photos.gripen_g10),
];

const j35Images = [
  entry("j35-g1", "01", photos.j35_fc31),
  entry("j35-g2", "02", photos.j35_g2),
  entry("j35-g3", "03", photos.j35_g3),
  entry("j35-g4", "04", photos.j35_g4),
  entry("j35-g5", "05", photos.j35_g5),
  entry("j35-g6", "06", photos.j35_g6),
  entry("j35-g7", "07", photos.j35_g7),
];

const j16Images = [
  entry("j16-g1", "01", photos.j16_g1),
  entry("j16-g2", "02", photos.j16_g2),
  entry("j16-g3", "03", photos.j16_g3),
  entry("j16-g4", "04", photos.j16_g4),
  entry("j16-g5", "05", photos.j16_g5),
  entry("j16-g6", "06", photos.j16_g6),
  entry("j16-g7", "07", photos.j16_g7),
  entry("j16-g8", "08", photos.j16_g8),
];

const j15Images = [
  entry("j15-g1", "01", photos.j15_base),
  entry("j15-g2", "02", photos.j15_g2),
  entry("j15-g3", "03", photos.j15_g3),
  entry("j15-g4", "04", photos.j15_g4),
  entry("j15-g5", "05", photos.j15_g5),
  entry("j15-g6", "06", photos.j15_g6),
  entry("j15-g7", "07", photos.j15_g7),
  entry("j15-g8", "08", photos.j15_g8),
];

const f15exImages = [
  entry("f15ex-g1", "01", photos.f15_ex),
  entry("f15ex-g2", "02", photos.f15_g2),
  entry("f15ex-g3", "03", photos.f15_g3),
  entry("f15ex-g4", "04", photos.f15_g4),
  entry("f15ex-g5", "05", photos.f15_g5),
  entry("f15ex-g6", "06", photos.f15_g6),
  entry("f15ex-g7", "07", photos.f15_g7),
  entry("f15ex-g8", "08", photos.f15_g8),
  entry("f15ex-g9", "09", photos.f15_g9),
  entry("f15ex-g10", "10", photos.f15_g10),
];

export const galleries = {
  "j-20": {
    years: "2016–2025",
    images: j20Images,
  },
  "f-22": {
    years: "2005–2026",
    images: f22Images,
  },
  "f-35": {
    years: "2008–2025",
    images: f35Images,
  },
  "su-57": {
    years: "2012–2025",
    images: su57Images,
  },
  "f-16": {
    years: "1990–2025",
    images: f16Images,
  },
  typhoon: {
    years: "2009–2024",
    images: typhoonImages,
  },
  rafale: {
    years: "2005–2026",
    images: rafaleImages,
  },
  gripen: {
    years: "2010–2026",
    images: gripenImages,
  },
  "j-35": {
    years: "2014–2026",
    images: j35Images,
  },
  "j-16": {
    years: "2023–2025",
    images: j16Images,
  },
  "j-15": {
    years: "2014–2026",
    images: j15Images,
  },
  "f-15ex": {
    years: "2021–2026",
    images: f15exImages,
  },
};

// Every photograph of every aircraft, in hangar order, as one continuous reel.
const allImages = Object.entries(galleries).flatMap(([slug, gallery]) =>
  gallery.images.map((image) => ({
    ...image,
    captionId: image.id,
    slug,
  }))
);

galleries.archive = {
  years: "2005–2026",
  images: allImages.map((image, index) => ({
    ...image,
    id: `archive-${index}`,
    number: String(index + 1).padStart(2, "0"),
  })),
};

// The gallery with its text in the current language. Archive photographs take
// their caption from the aircraft they belong to.
function buildGallery(slug, translation) {
  const texts = localise(galleryText, translation?.galleryText);
  const words = localise(captions, translation?.captions);
  const base = galleries[slug];

  return {
    ...base,
    ...texts[slug],
    images: base.images.map((image) => {
      const caption = words[image.captionId ?? image.id];

      if (!image.slug) {
        return {
          ...image,
          ...caption,
        };
      }

      const owner = texts[image.slug];

      return {
        ...image,
        ...caption,
        aircraft: owner.fullName,
        subtitle: `${owner.name} · ${caption.subtitle}`,
      };
    }),
  };
}

function GalleryNavigation({ onBack, gallery }) {
  const t = useText(text);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050708]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-10">
        <button
          type="button"
          onClick={onBack}
          className="group flex items-center gap-4"
        >
          <span className="grid h-10 w-10 place-items-center border border-white/15 text-white/60 transition group-hover:border-lime-300 group-hover:text-lime-300">
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
          </span>

          <span className="text-left">
            <span className="block text-xs sm:text-[11px] font-semibold uppercase tracking-[.24em]">
              {gallery.label}
            </span>

            <span className="mt-1 block font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
              {t.returnToArchive}
            </span>
          </span>
        </button>

        <div className="flex items-center gap-6">
          <div className="hidden text-right sm:block">
            <div className="font-mono text-xs sm:text-[10px] uppercase tracking-[.28em] text-lime-300">
              {t.visualArchive}
            </div>

            <div className="mt-1 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
              {t.publicPhotography} · {gallery.years}
            </div>
          </div>

          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}

function GalleryHero({ onExplore, gallery }) {
  const t = useText(text);
  const images = gallery.images;
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 900], [0, 180]);
  const contentY = useTransform(scrollY, [0, 800], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pb-20">
      <m.div
        style={{
          y: imageY,
        }}
        className="absolute -inset-x-6 -bottom-24 top-0"
      >
        <img
          src={images[0].src}
          srcSet={srcSet(images[0].src)}
          sizes="100vw"
          alt=""
          className="h-full w-full object-cover"
          style={{
            objectPosition: images[0].position,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050708] via-[#050708]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/10 to-[#050708]/40" />
        <div className="absolute inset-0 bg-lime-950/10 mix-blend-color" />
      </m.div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.16) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <m.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative mx-auto w-full max-w-[1500px]"
      >
        <div className="mb-8 flex items-center gap-4 font-mono text-xs sm:text-[11px] uppercase tracking-[.3em] text-lime-300">
          <span className="h-px w-10 bg-lime-300" />
          {t.photographicRecord}
        </div>

        <h1 className="max-w-5xl text-[clamp(4rem,11vw,10rem)] font-black leading-[.76] tracking-[-.075em]">
          {gallery.name}
          <span className="block text-white/50">{t.inFrame}</span>
        </h1>

        <div className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
            {gallery.intro}
          </p>

          <button
            type="button"
            onClick={onExplore}
            className="group flex w-fit items-center gap-4 bg-lime-300 px-6 py-4 text-xs sm:text-[11px] font-bold uppercase tracking-[.22em] text-black transition hover:bg-white"
          >
            {t.exploreImages}

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/15 pt-6 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/60">
          <div>
            <span className="mr-3 text-lime-300">
              {String(images.length).padStart(2, "0")}
            </span>
            {t.selectedPhotographs}
          </div>

          <div>
            <span className="mr-3 text-lime-300">CC</span>
            {t.attributedMedia}
          </div>

          <div>
            <span className="mr-3 text-lime-300">HD</span>
            {t.fullScreenViewer}
          </div>
        </div>
      </m.div>
    </section>
  );
}

function GalleryCard({ image, index, name, onOpen }) {
  const t = useText(text);
  const translate = useTerm();
  const imageOnRight = index % 2 === 1;

  return (
    <m.article
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      // Stagger only the first few cards: each card animates as it scrolls
      // into view, so a delay that grew with its position left cards far
      // down the archive invisible for seconds.
      transition={{
        duration: 0.8,
        delay: Math.min(index, 3) * 0.08,
      }}
      className={`group grid overflow-hidden border border-white/10 bg-[#080b0c] ${
        imageOnRight
          ? "lg:grid-cols-[.8fr_1.2fr]"
          : "lg:grid-cols-[1.2fr_.8fr]"
      }`}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className={`relative min-h-[420px] overflow-hidden text-left md:min-h-[580px] ${
          imageOnRight ? "lg:order-2" : ""
        }`}
        aria-label={t.open(image.title)}
      >
        <m.img
          src={image.src}
          srcSet={srcSet(image.src)}
          sizes="(min-width: 1024px) 60vw, 100vw"
          alt={t.cardAlt(image.aircraft ?? name, image.title)}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: image.position,
          }}
          whileHover={{
            scale: 1.045,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-lime-300/5 mix-blend-color" />

          <div className="absolute left-6 top-6 grid h-12 w-12 place-items-center border border-white/30 bg-black/20 backdrop-blur-md">
            <Maximize2 size={17} />
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/60">
          <span>{t.image} / {image.number}</span>
          <span>{t.clickToExpand}</span>
        </div>
      </button>

      <div
        className={`flex min-h-[440px] flex-col justify-between p-7 md:p-12 ${
          imageOnRight ? "lg:order-1" : ""
        }`}
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs sm:text-[11px] uppercase tracking-[.28em] text-lime-300">
              {t.record} {image.number}
            </span>

            <ImageIcon size={17} className="text-white/50" />
          </div>

          <h2 className="mt-16 text-4xl font-semibold tracking-[-.045em] md:text-6xl">
            {image.title}
          </h2>

          <p className="mt-5 font-mono text-xs sm:text-[11px] uppercase tracking-[.2em] text-white/60">
            {image.subtitle}
          </p>

          <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
            {image.description}
          </p>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="grid gap-5 text-xs sm:text-[11px] sm:grid-cols-2">
            <div>
              <div className="font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
                {t.photographer}
              </div>

              <div className="mt-2 text-white/65">
                {image.photographer}
              </div>
            </div>

            <div>
              <div className="font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
                {t.licence}
              </div>

              <div className="mt-2 text-white/65">{translate(image.licence)}</div>
            </div>
          </div>

          <a
            href={image.source}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center gap-3 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50 transition hover:text-lime-300"
          >
            {t.viewSource}
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </m.article>
  );
}

function Lightbox({
  images,
  name,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  const t = useText(text);
  const translate = useTerm();
  const selectedImage =
    selectedIndex === null ? null : images[selectedIndex];

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, onClose, onPrevious, onNext]);

  return (
    <AnimatePresence>
      {selectedImage && (
        <m.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={t.expanded(selectedImage.title)}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center border border-white/20 bg-black/50 text-white/70 transition hover:border-lime-300 hover:text-lime-300 md:right-10 md:top-10"
            aria-label={t.closeImage}
          >
            <X size={19} />
          </button>

          <button
            type="button"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 bg-black/50 text-white/70 transition hover:border-lime-300 hover:text-lime-300 md:left-10"
            aria-label={t.previousImage}
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 bg-black/50 text-white/70 transition hover:border-lime-300 hover:text-lime-300 md:right-10"
            aria-label={t.nextImage}
          >
            <ArrowRight size={18} />
          </button>

          <m.div
            key={selectedImage.id}
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            className="pointer-events-none relative flex h-full w-full max-w-[1600px] flex-col justify-center"
          >
            <img
              src={selectedImage.full}
              srcSet={srcSet(selectedImage.full)}
              sizes="(min-width: 1600px) 1600px, 100vw"
              alt={t.expandedAlt(selectedImage.aircraft ?? name, selectedImage.title)}
              className="min-h-0 max-h-[78vh] w-full object-contain"
            />

            <div className="mt-5 flex flex-col justify-between gap-4 border-t border-white/15 pt-5 md:flex-row md:items-center">
              <div>
                <div className="font-mono text-xs sm:text-[10px] uppercase tracking-[.25em] text-lime-300">
                  {t.record} {selectedImage.number}
                </div>

                <div className="mt-2 text-lg font-semibold">
                  {selectedImage.title}
                </div>
              </div>

              <div className="font-mono text-xs sm:text-[10px] uppercase tracking-[.18em] text-white/50">
                {selectedIndex + 1} / {images.length} ·{" "}
                {selectedImage.photographer} · {translate(selectedImage.licence)}
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

function Gallery({ onBack, aircraft = "j-20", translation }) {
  const t = useText(text);
  const gallery = useMemo(
    () => buildGallery(aircraft, translation),
    [aircraft, translation]
  );
  const images = gallery.images;
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeImage = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const previousImage = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (
        (currentIndex - 1 + images.length) %
        images.length
      );
    });
  }, [images.length]);

  const nextImage = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex + 1) % images.length;
    });
  }, [images.length]);

  const scrollToGallery = () => {
    document.getElementById("photographs")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GalleryNavigation onBack={onBack} gallery={gallery} />

      <main>
        <GalleryHero onExplore={scrollToGallery} gallery={gallery} />

        <section
          id="photographs"
          className="scroll-mt-20 border-t border-white/10 px-5 py-24 md:px-10 md:py-36"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <div>
                <div className="font-mono text-xs sm:text-[11px] uppercase tracking-[.3em] text-lime-300">
                  {t.selectedPhotography}
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-.05em] md:text-7xl">
                  {t.publicAppearances}
                </h2>
              </div>

              <p className="max-w-lg text-sm leading-7 text-white/60">
                {t.viewerHelp}
              </p>
            </div>

            <div className="space-y-8">
              {images.map((image, index) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  name={gallery.fullName}
                  index={index}
                  onOpen={setSelectedIndex}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#080b0c] px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <div className="font-mono text-xs sm:text-[11px] uppercase tracking-[.3em] text-lime-300">
                  {t.mediaNotice}
                </div>

                <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  {t.imagesWithAttribution}
                </h2>
              </div>

              <div>
                <p className="text-sm leading-7 text-white/60">
                  {t.credits}
                </p>

                <button
                  type="button"
                  onClick={onBack}
                  className="group mt-8 flex items-center gap-4 bg-lime-300 px-6 py-4 text-xs sm:text-[11px] font-bold uppercase tracking-[.22em] text-black transition hover:bg-white"
                >
                  {t.returnToArchive}

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50 sm:flex-row">
          <span>{gallery.label} · {t.visualArchive}</span>
          <span>{t.concept}</span>
        </div>

        <div className="mx-auto mt-6 flex max-w-[1500px] flex-col justify-between gap-2 border-t border-white/10 pt-6 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50 sm:flex-row">
          <span>
            {t.madeBy}{" "}
            <span className="text-white/80">Sergio Rodriguez Anton</span>
          </span>

          <a
            href="mailto:sergioranton@gmail.com"
            className="transition hover:text-lime-300"
          >
            sergioranton@gmail.com
          </a>
        </div>
      </footer>

      <Lightbox
        images={images}
        name={gallery.fullName}
        selectedIndex={selectedIndex}
        onClose={closeImage}
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </div>
  );
}

export default Gallery;