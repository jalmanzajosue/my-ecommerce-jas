import React, { useEffect, useState } from 'react'
import { CardContent, Typography, Card, Grid, CardHeader, CardActionArea, Avatar, Button, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    const { id } = useParams();

    const dataObjMock =
        [
            { id: 1, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Haku AMD A10', price: '1,599', img: '/1.jpg', description: 'AMD A10 5800k 3.8GHz\ng4 núcleos, 4 hilos, Caché N2 1MB \nDisco Sólido SSD 500GB \nMemoria RAM 8GB DDR3 / 1600 MHz \nMonitor Widescreen 19" HD \nMainboard Chipset AMD FM2+ \nRJ45/ VGA \nKit Gamer: Teclado/ Mouse \nAuricular, Camara Web, Antena Wifi\nFuente real 450 W        ' },
            { id: 2, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Haku RGB AMD A10', price: '1,699', img: '/2.jpg', description: 'AMD A10 7700k 3.5GHz\n4 núcleos, 4 hilos, Caché N2 4MB\nDisco Sólido SSD 480GB\nMemoria RAM 16GB DDR3 / 1600 MHz\nMonitor Widescreen 19" HD\nMainboard Chipset AMD FM2+\nRJ45/ VGA\nKit Gamer: Teclado/ Mouse\nAuricular, Cámara Web, Antena Wifi\nFuente real 350 W' },
            { id: 3, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Haku Plus AMD A10', price: '2,199', img: '/3.jpg', description: 'AMD A10 7700k 3.5GHz\n4 núcleos, 4 hilos, Caché N2 4MB\nDisco Sólido SSD 480GB\nMemoria RAM 8GB DDR3 / 1600 MHz\nMonitor Widescreen 22" FHD\nMainboard Chipset AMD FM2\nTarjeta de Video GTX750 2GB GDDR5\nRJ45/ VGA\nKit Gamer: Teclado/ Mouse\nAuricular, Camara Web, Antena Wifi\nFuente real 450 W' },
            { id: 4, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Haku Plus Ryzen 5-1500x', price: '2,299', img: '/4.jpg', description: 'CPU AMD Ryzen 5 1500x 3.5GHz\n4 núcleos, 8 hilos, Caché L2 2MB\nDisco Sólido SSD M.2 500GB\nMemoria RAM 8GB DDR4 / 2600MHz\nMonitor LED 22" HD\nMainboard A320 HD2\nTarjeta de Video GTX750ti 2GB\nDVI/ HDMI\nKit Gamer: Teclado/ Mouse\nAuricular, Camara Web, Antena Wifi\nFuente Real 550 W\n' },
            { id: 5, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Ryu RGB Core i7 4th', price: '2,499', img: '/5.jpg', description: 'Intel Core I7 4th 3.4Ghz\n4 Núcleos Cache 8MB\nDisco Sólido SSD 500GB M.2\nMemoria RAM 16GB DDR3 / 1600 MHz\nMonitor 24" FHD Curvo 144Hz\nMAINBOARD INTEL B85\nVideo Nvidia GTX750TI 4GB GDDR5 \nRJ45/ VGA/ HDMI\nKit Gamer: Teclado/ Mouse\nAuricular, Camara Web, Antena Wifi\nFuente Real 550 W\n' },
            { id: 6, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer RyuGreen  Core i5 6th Gen', price: '2,999', img: '/6.jpg', description: 'Core I5 6th\n4 Núcleos Cache 6MB\nDisco Sólido SSD 500GB\nMemoria RAM 16GB DDR4 / 2600 MHz\nMonitor 24" FHD Curvo 144Hz\nMAINBOARD H110\nVideo Nvidia GTX1650 4GB\nRJ45/ VGA/ HDMI\nKit Gamer: Teclado/ Mouse\nAuricular, Camara Web, Antena Wifi\nFuente Real 650 W' },
            { id: 7, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Ryu Blue Plus Core i7 4th Gen', price: '3,099', img: '/7.jpg', description: 'CPU Intel Core i7 4th 3.4 GHz\n4 núcleos Cache 8MB\nDisco Sólido SSD 500GB m.2\nMemoria RAM 16GB DDR3 / 1600 MHz\nMonitor 24" FHD Curvo 144Hz\nMAINBOARD INTEL B85\nVideo Nvidia GTX1650 4GB GDDR5\nRJ45/ VGA/ HDMI\nKit Gamer: Teclado/ Mouse\nAuricular, Camara Web, Antena Wifi\nFuente Real 650 W' },
            { id: 8, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Ryu Blue Plus Core I7 7ma', price: '3,699', img: '/8.jpg', description: 'Intel Core i7 7700 3.60GHz\n4 núcleos, 8 hilos, Cache 8MB\nDisco Sólido SSD 1TB\nMemoria RAM 32GB\nMonitor 24" FHD Curvo 144Hz\nMAINBOARD H110\nTarjeta de video GTX1650 4GB GDDR5\nRJ45/VGA/Display Port/HDMI\nKit Gamer: Teclado/ Mouse\nAuricular, Camara Web, Antena Wifi\nFuente Real 650W' },
            { id: 11, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco Core I3 10105F 10Th Gen', price: '2,199', img: '/16.jpg', description: 'CPU Intel Core i3 10105F 3.7GHz\n4 núcleos, 8 hilos, Cache 6Mb\nDisco Sólido SSD 480GB\nMemoria RAM 16GB DDR4 2666 MHz\nMonitor LED 19" HD Widescreen\nMainboard H410\nTarjeta de Video Nvidia GTX650 2GB GDDR5\n DVI/ HDMI\nKit Gamer: Teclado, mouse\nFuente Real 550 W' },
            { id: 12, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco Plus Core I5 10400F 10Th Gen', price: '2,599', img: '/17.jpg', description: 'CPU Intel Core i5 10400F 2.9 GHz\n6 núcleos, 12 hilos, Caché 12MB\nDisco Sólido SSD 480GB\nMemoria RAM 16GB DDR4 2666 MHz\nMonitor LED 19" HD Widescreen\nMainboard H410 DVI/ HDMI\nTarjeta de Video Nvidia GT1030 2GB GDDR5\nKit Gamer: Teclado, mouse\nFuente Real 550 W' },
            { id: 13, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco RGB Core I3 10105F 10Th Gen', price: '2,699', img: '/18.jpg', description: 'CPU Intel Core i3 10105F 3.7GHz\n4 núcleos, 8 hilos, Cache 6Mb\n Disco Sólido SSD M.2 500GB\nMemoria RAM 8GB DDR4 2666 MHz\nMonitor 24"144Hz\nMainboard H410\nTarjeta de Video Nvidia GTX1050ti 4GB GDDR5\n DVI/ HDMI\nKit Gamer: Teclado, mouse\nFuente Real 550 W' },
            { id: 14, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco Green Core I5 10400F 10TH', price: '2,999', img: '/19.jpg', description: 'CPU Intel Core i5 10400F 2.9 GHz\n6 núcleos, 12 hilos, Caché 12MB\nDisco Sólido SSD 480GB\nMemoria RAM 8GB DDR4 2666 MHz\nMonitor LED 22" FHD Widescreen\nMainboard H510 DVI/ HDMI\nTarjeta de Video  GTX1050TI 4GB GDDR5\nKit Gamer: Teclado, mouse\nFuente Real 550 W' },
            { id: 15, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco Plus Core i5 10400F', price: '3,699', img: '/20.jpg', description: 'CPU Intel Core i5 10400F 2.9 GHz\n6 núcleos, 12 hilos, Caché 12MB\nDisco Duro HDD 1TB\nDisco Sólido M2 500GB NVME\nMemoria RAM 16GB DDR4 2666 MHz\nMonitor 24" FHD Curvo\nMainboard B460M DVI/ HDMI\nTarjeta de Video Nvidia GTX1050 4GB GDDR5\n Kit Gamer: Teclado, mouse\nFuente Real 500W' },
            { id: 16, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-Blue Core i5 10400F', price: '3,999', img: '/21.jpg', description: 'CPU Intel Core i5 10400F 2.9 GHz\n6 núcleos, 12 hilos, Caché 12MB\nDisco Duro HDD 1TB\nDisco Sólido SSD 500GB M.2 Nvme\nMemoria RAM 16GB  DDR4 2666 MHz\nMonitor 27" FHD\n Mainboard B460M-A\n Tarjeta de Video Nvidia GTX1650 4GB GDDR5\nDVI/ HDMI\nKit Gamer: Teclado, Mouse\nFuente Real 650w' },
            { id: 17, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-Blue Plus Core i5 11400F 11Th Gen', price: '4,499', img: '/22.jpg', description: 'CPU Intel Core i5 11400F 2.6GHz\n6 núcleos, 12 hilos, Caché 12 MB\nDisco Sólido M2 500GB NVME\nMemoria RAM 16GB DDR4 / 3200mhz\nMonitor 24" FHD Curvo\nMainboard B560\nTarjeta de Video NVIDIA GTX1660 super 6gb GDDR6\nDVI/ HDMI/ Display Port/ Wifi/ Cámara\nTeclado Mecánico, mouse gamer / Auricular Lúdico\nFuente certificada 700w 80 plus white' },
            { id: 18, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco RGB Core i5 12400F', price: '4,699', img: '/23.jpg', description: 'CPU Intel Core i5 12400F 2.50GHz\n6 núcleos, 12 hilos, Caché 18MB\nDisco Sólido M2 500GB NVME\nMemoria RAM 16GB DDR4 3200MHz\nMonitor 24" FHD Curvo\nMainboard H610\nTarjeta de video GTX1660 SUPER 6GB GDDR6\nDVI/ HDMI/ Display Port / Wifi/ Camara FHD\nTeclado Mecánico, mouse gamer, auricular lúdico\nFuente certificada 700w 80 plus white\nCooler Gammemax' },
            { id: 19, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB CPU Intel Core i7 10700F', price: '4,999', img: '/24.jpg', description: 'CPU Intel Core i7 10700F 2.90 GHz\n8 núcleos, 16 hilos, Caché 16 MB\nDisco Sólido M2 1TB NVME\nMemoria RAM 32GB DDR4 2666MHz\nMonitor LED 24" FHD Curvo\nMainboard B460\nTarjeta de Video  GTX1660 super 6gb GDDR6\nDVI/HDMI/Display Port/ Wifi/ Camara FHD\nTeclado Mecánico, mouse gamer / Auricular Lúdico\nCooler Gammax\nFuente Certificada 700W  ' },
            { id: 20, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB CORE I7 10700F 10Th Gen', price: '5,999', img: '/25.jpg', description: 'CPU Intel Core i7 10700F 2.90 GHz\n8 núcleos, 16 hilos, Caché 16 MB\nDisco Sólido M2 1TB NVME\nMemoria RAM 32GB DDR4/ 2666MHz\nMonitor LED 27" FHD Curvo\nMainboard B460\nTarjeta de Video RTX2060 6GB GDDR6\nDVI/HDMI/Display Port/Wifi/ Camara FHD\nTeclado Mecánico, mouse Logitech G203/ Auricular Ludico\nCooler gamma X\nFuente certificada 700w 80 plus white' },
            { id: 21, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB Plus CORE i7 12700F 12Th Gen', price: '7,299', img: '/26.jpg', description: 'CPU Intel Core  i7 12700F 2.10GHz\n12 núcleos, 20 hilos, Caché 25 MB\nDisco Sólido M2 1TB NVME\nMemoria RAM 32GB DDR4/ 3200MHz\nMainboard z690 phantom\nMonitor LED 24" FHD Curvo\n Tarjeta de Video RTX 3060 12GB GDDR6\nDVI/ HDMI/ Display Port/ Wifi/ Camara FHD\nTeclado mecánico, mouse Logitech G203/ Auricular Lúdico\nCooler gamma X\nFuente certificada 700w' },
            { id: 22, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB CORE I7 12700F 12Th Gen', price: '7,999', img: '/27.jpg', description: 'CPU Intel Core  i7 12700F 2.10GHz\n12 núcleos, 20 hilos, Caché 25 MB\nDisco Sólido M2 1TB NVME\nMemoria RAM 32GB DDR4/ 3200 MHz\nMainboard z690\n Monitor  27"FHD Curvo\nTarjeta de Video Nvidia RTX3060ti 8GB GDDR6\nDVI/ HDMI/ Display Port/ Wifi/ Camara FHD\nTeclado Mecánico, mouse Logitech G203/ Auricular Ludico\nFuente Real 750 W 80 Plus Gold\nCooler gamma X' },
            { id: 23, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB Plus CORE I7 12700F 12Th Gen', price: '8,999', img: '/28.jpg', description: 'CPU Intel Core  i7 12700F 2.10GHz\n12 núcleos, 20 hilos, Caché 25 MB\nDisco Sólido M2 1TB NVME\nMemoria RAM 32GB DDR4/ 3200 MHz\nMainboard z690\n Monitor  27"FHD Curvo 144HZ\nTarjeta de Video Nvidia RTX3070TI 8GB GDRR6X\nDVI/ HDMI/ Display Port/ Wifi/ Camara FHD\nTeclado mecánico, mouse Logitech G203\nFuente Real 750 W 80 Plus Gold\nCooler gamma X' },
            { id: 24, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB Plus CORE I9 11900K 11Th Gen', price: '9,999', img: '/29.jpg', description: 'CPU Intel Core i9 11900K 3.5 GHz\n8 núcleos 16 hilos Cache 16MB\nDisco Sólido M2 1TB NVME\Mainboard z590\n Monitor  27"FHD Curvo\nTarjeta de Video Nvidia RTX3070TI 8GB GDDR6X\nDVI/ HDMI/ Display Port/ Wifi/ Camara FHD\nTeclado mecánico, mouse Logitech G203\nFuente Real 750 W 80 Plus Gold\nEnfriamiento liquido 240R\nCooler gammax X' },
            { id: 25, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer FireX8-RGB CORE I9 11900K 11Th Gen', price: '11,999', img: '/30.jpg', description: 'CPU Intel Core i9 11900K 3.5 GHz\n8 núcleos 16 hilos Cache 16MB\nDisco Sólido SSD M2 1TB NVME\Mainboard Z590\n Monitor 27" curvo 144Hz\nTarjeta de Video RX6800XT 16GB GDDR6\nDVI/ HDMI/ Display Port/ Wifi/ Camara FHD\nTeclado mecánico, mouse Logitech G203\nEnfriamiento liquido 240R\nFuente Certificada 750 W 80 gold Plus ' },
            { id: 26, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer FireX8-RGB Plus CORE I9 11900K 11Th Gen', price: '12,999', img: '/31.jpg', description: 'CPU Intel Core i9 11900K 3.5 GHz\n8 núcleos 16 hilos Cache 16MB\nDisco Sólido M2 1TB NVME\Mainboard Z590\n Monitor 27" curvo 144Hz\nTarjeta Video RTX 3080 12GB GDDR6X\nDVI/ HDMI/ Display Port/ Wifi/ Camara FHD\nTeclado mecánico, mouse Logitech G203, Auricular Logitech G335\nEnfriamiento liquido 240R\nFuente Certificada 750 W 80 Gold Plus ' },
            { id: 27, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Ultra Fire X8 RGB PLUS  CORE I9 11900K 11Th Gen', price: '16,999', img: '/32.jpg', description: 'CPU Intel Core i9 11900K 3.5 GHz\n8 núcleos 16 hilos Cache 16MB\nDisco Duro HDD 8 TB 5400 RPM\nDisco Sólido M2 1TB NVME\nMemoria RAM 128GB DDR4/ 3200 MHz\nMainboard Z590\n Monitor BenQ Zowie XL2546 24.5" 240Hz\nTarjeta Video  RTX3080 12gb GDDR6X\nHDMI/ Display Port\nTeclado mecánico, mouse Logitech G203,\nAuricular Logitech G335 GAMING BLACK\nEnfriamiento liquido 240R\nFuente Real 750 W 80 plus gold' },
            { id: 29, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku Ryzen 5 4600G', price: '1,899', img: '/34.jpg', description: 'CPU AMD Ryzen 5 4600G 3.70GHz\nCaché L3 total 8MB, 6 núcleos, 12 hilos\Memoria RAM 8GB DDR4/ 2666 MHz\nMonitor LED 19" HD\nMainboard A320 HD2\nDVI/ HDMI / Display Port / Wifi\nKit Gamer: Teclado y Mouse\nFuente Real 350 W' },
            { id: 30, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku Hiper Ryzen 5 5600G', price: '2,099', img: '/35.jpg', description: 'AMD Ryzen 5 5600G 3.9 GHz\n6 Núcleos, 12 hilos, Caché L3 16MB\nDisco Sólido SSD 500GB Nvme\nMemoria RAM 8GB DDR4/ 2666 MHz\nMonitor LED 19" HD\nMainboard A520\nDVI/ HDMI / Display Port / Wifi\nKit Gamer: Teclado y Mouse\nFuente Real 500 W' },
            { id: 31, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku Blue Ryzen 5 5600G', price: '2,299', img: '/36.jpg', description: 'AMD Ryzen 5 5600G 3.9 GHz\n6 Núcleos, 12 hilos, Caché L3 16MB\Memoria RAM 16GB DDR4/ 2666 MHz\nMonitor LED 19" HD\n Mainboard A520\Kit Gamer: Teclado, Mouse\n Fuente Real 500 W ' },
            { id: 32, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku Red Plus Ryzen 5-5600G', price: '2,599', img: '/37.jpg', description: 'AMD Ryzen 5 5600G 3.9 GHz\n6 Núcleos, 12 hilos, Caché L3 16MB\Memoria RAM 16GB DDR4/ 2666 MHz\nMonitor LED 24" FHD Curvo\nMainboard A520 DVI/ HDMI/Wifi\nKit Gamer: Teclado, Mouse\nFuente Real 500 W' },
            { id: 33, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Amaru Junior Ryzen 7 5700G', price: '2,999', img: '/38.jpg', description: 'CPU AMD Ryzen 7 5700G 3.8GHz\n8 núcleos, 16 hilos, Caché L3 16MB\Memoria RAM 16GB DDR4/ 3200 MHz\nMonitor 24" Curvo FHD\nMainboard A520\nDVI/ HDMI/ Display Port / Wifi\nKit gamer: Teclado, mouse\nFuente Real 500 W' },
            { id: 34, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku RGB Ryzen 5-3600', price: '3,699', img: '/39.jpg', description: 'CPU AMD Ryzen 5 3600 3.6 GHz\n6 núcleos, 12 hilos, Caché L3 32MB\n Disco Sólido SSD 500GB M2 NVME\nMemoria RAM 32GB DDR4/ 2666 MHz\nMonitor LED 24" FHD Curvo\nMainboard A520 DVI/ HDMI/WIFI\nTarjeta de video GTX1050 4GB GDDR5\nKit gamer: Teclado y Mouse/ Auricular/ Cámara FHD\nFuente Real 550 W' },
            { id: 35, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Amaru RGB Ryzen 5 3600', price: '3,999', img: '/40.jpg', description: 'CPU AMD Ryzen 5 3600 3.6 GHz\n6 núcleos, 12 hilos, Caché L3 32MB\n Disco Sólido SSD 500GB M2 NVME\nMemoria RAM 16GB DDR4/ 2666 MHz\nMonitor 24" FHD curvo\nMainboard A520\DVI/ HDMI/ Display Port/ Wifi/ Camara\nTeclado mecánico, mouse gamer/ Auricular\nFuente Real 650 W' },
            { id: 36, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Hydra Ryzen 5 5600x', price: '4,699', img: '/41.jpg', description: 'CPU AMD Ryzen 5 5600x 3.7GHz\n6 núcleos, 12 hilos, Caché L3 32 MB\nDisco Sólido SSD 500GB M2 NVME\nMemoria RAM 32GB DDR4/ 2666 MHz\nMonitor 24" Curvo FHD\nMainboard B550\DVI/ HDMI / Display Port/ Wifi/ Cámara\nTeclado mecánico, mouse gamer/ Auricular Lúdico\nFuente Real 700W certificada white' },
            { id: 37, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Hydra Plus Ryzen 7 3700x', price: '4,999', img: '/42.jpg', description: 'CPU AMD Ryzen  7 3700x 3.6 GHz\n8 núcleos, 16 hilos, Caché L3 32MB\nDisco Sólido SSD 500GB M2 NVME\Monitor Samsung 24"FHD Curvo\nMainboard B550\n DVI/ HDMI / Display Port / Wifi/ Camara\nTeclado mecánico, mouse gamer, auricular lúdico\nFuente Real 700W certificada white' },
            { id: 38, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor Ryzen 7-5800X', price: '5,699', img: '/43.jpg', description: 'CPU AMD Ryzen 7 5800X 3.8Ghz\n8 núcleos, 16 hilos, Caché L3 32 MB\nDisco Sólido SSD 500GB M2 NVME\nMemoria RAM 32GB DDR4/ 3200 MHz\nMainboard B550\nMonitor 27" FHD Curvo\n Tarjeta de Video GTX1660 Super 6gb GDDR6\nDVI/ HDMI/ Display Port/ Wifi/ Cámara\nTeclado mecánico, mouse gamer/ Auricular lúdico\nFuente Certificada 700 w80 plus' },
            { id: 39, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor Ryzen 7-5800X', price: '6,299', img: '/44.jpg', description: 'CPU AMD Ryzen 7 5800X 3.8Ghz\n8 núcleos, 16 hilos, Caché L3 32 MB\nDisco Sólido SSD 1TB M2 NVME\nMemoria RAM 32GB DDR4/ 3200MHz\nMainboard B550\nMonitor 27" FHD Curvo\nTarjeta de Video NVIDIA RTX2060 6GB GDDR6\nDVI/ HDMI/ Display Port / Antena Wifi/ Camara FHD\nTeclado mecánico, mouse Logitech G203/ Auricular Ludico\nFuente Certificada 700W Plus White' },
            { id: 40, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor PLUS Ryzen 7-5800X', price: '6,999', img: '/45.jpg', description: 'CPU AMD Ryzen 7 5800X 3.8Ghz\n8 núcleos, 16 hilos, Caché L3 32 MB\Memoria RAM 32GB DDR4/ 3200 MHz\nMainboard B550\nMonitor 27"FHD Curvo\nTarjeta de Video Nvidia RTX3060 12GB GDDR6\nDVI/ HDMI/ Display Port / Antena Wifi Camara FHD\nTeclado mecánico, mouse Logitech G203, auricular logitech g335\nFuente Certificada 750 W Gold 80 Plus' },
            { id: 41, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Falkor-Plus Ryzen 7 5800X', price: '7,999', img: '/46.jpg', description: 'CPU AMD Ryzen 7 5800X 3.8Ghz\n8 núcleos, 16 hilos, Caché L3 32 MB\nDisco Sólido SSD M2 1TB NVME\nMemoria RAM 32GB DDR4/ 3200 MHz\nMainboard x570\n Monitor  27"FHD Curvo\nTarjeta de Video RTX3060 12GB GDDR6\nDVI/ HDMI/ Display Port/ Antena Wifi/ Camara FHD\nTeclado mecánico, mouse Logitech G203, auricular logitech g335\nEnfriamiento liquido 240r\nFuente Certificada 750W Gold 80 Plus' },
            { id: 42, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor Ryzen 9-5900x', price: '8,999', img: '/47.jpg', description: 'CPU AMD Ryzen 9 5900X 3.7GHz\n12 núcleos, 24 hilos, Caché L3 64MB\nDisco Sólido SSD M2 1TB NVME\Mainboard X570\n Monitor 27"FHD Curvo 144HZ\nTarjeta de Video RTX3060TI 8GB GDDR6\nDVI/ HDMI/ Display Port/ Antena Wifi/ Camara\nTeclado mecánico, mouse Logitech G203, auricular logitech g335\nEnfriamiento liquido 240r\nFuente Certificada 750W Gold 80 Plus ' },
            { id: 43, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Falkor-Plus Ryzen 9 5900X', price: '10,999', img: '/48.jpg', description: 'CPU AMD Ryzen 9 5900X 3.7GHz\n12 núcleos, 24 hilos, Caché L3 64MB\nDisco Sólido SSD M2 2TB NVME\nMemoria RAM 64GB DDR4/ 3200 MHz\nMainboard x570\nMonitor 27″FHD Curvo 144HZ\nTarjeta de Video RX6700XT 12GB GDDR6\nDVI/ HDMI/ Display Port / Wifi/ Camara FHD\nTeclado mecánico, mouse Logitech G203, auricular logitech g335\nEnfriamiento liquido 240R\nFuente Certificada 750W Gold 80 Plus' },
            { id: 44, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor Ryzen 9-5900x', price: '11,999', img: '/49.jpg', description: 'CPU AMD Ryzen 9 5900X 3.7GHz\n12 núcleos, 24 hilos, Caché L3 64MB\Memoria RAM 64GB DDR4/ 3200 MHz\Monitor 27″FHD Curvo 144HZ\nTarjeta de Video RX6800XT 16GB GDDR6\nDVI/ HDMI/ Display Port / Wifi/ Camara\nTeclado mecánico, mouse Logitech G203\nEnfriamiento liquido 240R\nFuente Certificada 750W Gold 80 Plus' },
        ];


    useEffect(() => {
        var promise = new Promise((resolve, reject) => {
            let dataFindObjMock;


            dataFindObjMock = dataObjMock.filter(x => x.id == id);

            console.log("dataFindObjMock", dataFindObjMock)

            if (dataFindObjMock[0] != null) {
                console.log("Promesa correcta");
                resolve(dataFindObjMock[0]);
            }
            else {
                console.log("Promesa rechazada");
                reject(Error("Promesa rechazada"));
            }
        });

        promise.then(result => {
            console.log(result)
            setData(result)
        }, function (error) {
            console.log(error)
            setData({})
        });

    }, [id])

    return (
        <>
            <div style={{ flexGrow: 1, padding: 2, paddingTop: 20 }}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} sm={6} md={5}>
                        <img
                            src={data.img}
                            width={575}
                            height={575}
                            alt=''
                            loading="lazy"
                        />

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography style={{ textAlign: 'left', color: '#333', fontFamily: 'sans-serif', fontWeight: 600, fontSize: 28, lineHeight: 'normal' }} variant='h1'>{data.subtitle}</Typography>
                        <Typography style={{ textAlign: 'left', fontWeight: 600, fontSize: 20, fontFamily: 'sans-serif', lineHeight: 'normal', color: '#d21717', marginTop: 10 }} variant='body1'>S/ {data.price}</Typography>
                        <Typography style={{ textAlign: 'left', fontWeight: 500, color: '#666', lineHeight: '2', marginTop: 10, whiteSpace: 'pre-line', fontSize: 14 }} variant='body1'>
                            {data.description}
                        </Typography>

                        <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', marginTop: 10, marginBottom: 10 }} >
                            <Avatar variant="square" style={{backgroundColor:'#eee',color:'#333'}} >
                                <IconButton  color="inherit" >
                                    +
                                </IconButton>
                            </Avatar>
                            <Avatar style={{ backgroundColor: 'white' }} variant="square" >
                                <Typography style={{ textAlign: 'center', fontWeight: 500, color: '#666', }} variant='body1'>
                                    0
                                </Typography>
                            </Avatar>
                            <Avatar variant="square" style={{backgroundColor:'#eee',color:'#333'}} >
                                <IconButton  color="inherit" >
                                    -
                                </IconButton>
                            </Avatar>

                        </Grid>
                        <Grid item xs={12} sm={6} md={12} style={{ marginTop: 10, marginBottom: 10 }} >

                            <Button style={{ backgroundColor: '#FF6200', color: '#fff', borderRadius: 30, borderBottom: 'none', border: 'none', width: '100%' }} variant="outlined">Agregar al carro</Button>
                        </Grid>
                    </Grid>

                </Grid>
            </div>

        </>
    )
}
