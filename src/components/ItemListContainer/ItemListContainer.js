import React, { useEffect, useState } from 'react'
import { CardContent, Typography, Card, Grid, CardHeader, CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
export const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const { categoryId } = useParams();

    const dataArrayMock = [
        { id: 1, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Haku AMD A10', price: '1,599', img: '/1.jpg' },
        { id: 2, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Haku RGB AMD A10', price: '1,699', img: '/2.jpg' },
        { id: 3, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Haku Plus AMD A10', price: '2,199', img: '/3.jpg' },
        { id: 4, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Haku Plus Ryzen 5-1500x', price: '2,299', img: '/4.jpg' },
        { id: 5, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Ryu RGB Core i7 4th', price: '2,499', img: '/5.jpg' },
        { id: 6, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer RyuGreen  Core i5 6th Gen', price: '2,999', img: '/6.jpg' },
        { id: 7, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Ryu Blue Plus Core i7 4th Gen', price: '3,099', img: '/7.jpg' },
        { id: 8, idCategory: 1, title: 'PC GAMA MEDIA', subtitle: 'PC Gamer Ryu Blue Plus Core I7 7ma', price: '3,699', img: '/8.jpg' },
        { id: 11, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco Core I3 10105F 10Th Gen', price: '2,199', img: '/16.jpg' },
        { id: 12, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco Plus Core I5 10400F 10Th Gen', price: '2,599', img: '/17.jpg' },
        { id: 13, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco RGB Core I3 10105F 10Th Gen', price: '2,699', img: '/18.jpg' },
        { id: 14, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco Green Core I5 10400F 10TH', price: '2,999', img: '/19.jpg' },
        { id: 15, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco Plus Core i5 10400F', price: '3,699', img: '/20.jpg' },
        { id: 16, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-Blue Core i5 10400F', price: '3,999', img: '/21.jpg' },
        { id: 17, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-Blue Plus Core i5 11400F 11Th Gen', price: '4,499', img: '/22.jpg' },
        { id: 18, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco RGB Core i5 12400F', price: '4,699', img: '/23.jpg' },
        { id: 19, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB CPU Intel Core i7 10700F', price: '4,999', img: '/24.jpg' },
        { id: 20, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB CORE I7 10700F 10Th Gen', price: '5,999', img: '/25.jpg' },
        { id: 21, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB Plus CORE i7 12700F 12Th Gen', price: '7,299', img: '/26.jpg' },
        { id: 22, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB CORE I7 12700F 12Th Gen', price: '7,999', img: '/27.jpg' },
        { id: 23, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB Plus CORE I7 12700F 12Th Gen', price: '8,999', img: '/28.jpg' },
        { id: 24, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Draco-RGB Plus CORE I9 11900K 11Th Gen', price: '9,999', img: '/29.jpg' },
        { id: 25, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer FireX8-RGB CORE I9 11900K 11Th Gen', price: '11,999', img: '/30.jpg' },
        { id: 26, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer FireX8-RGB Plus CORE I9 11900K 11Th Gen', price: '12,999', img: '/31.jpg' },
        { id: 27, idCategory: 2, title: 'PC GAMA INTEL', subtitle: 'PC Gamer Ultra Fire X8 RGB PLUS  CORE I9 11900K 11Th Gen', price: '16,999', img: '/32.jpg' },
        { id: 29, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku Ryzen 5 4600G', price: '1,899', img: '/34.jpg' },
        { id: 30, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku Hiper Ryzen 5 5600G', price: '2,099', img: '/35.jpg' },
        { id: 31, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku Blue Ryzen 5 5600G', price: '2,299', img: '/36.jpg' },
        { id: 32, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku Red Plus Ryzen 5-5600G', price: '2,599', img: '/37.jpg' },
        { id: 33, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Amaru Junior Ryzen 7 5700G', price: '2,999', img: '/38.jpg' },
        { id: 34, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Haku RGB Ryzen 5-3600', price: '3,699', img: '/39.jpg' },
        { id: 35, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Amaru RGB Ryzen 5 3600', price: '3,999', img: '/40.jpg' },
        { id: 36, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Hydra Ryzen 5 5600x', price: '4,699', img: '/41.jpg' },
        { id: 37, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Hydra Plus Ryzen 7 3700x', price: '4,999', img: '/42.jpg' },
        { id: 38, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor Ryzen 7-5800X', price: '5,699', img: '/43.jpg' },
        { id: 39, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor Ryzen 7-5800X', price: '6,299', img: '/44.jpg' },
        { id: 40, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor PLUS Ryzen 7-5800X', price: '6,999', img: '/45.jpg' },
        { id: 41, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Falkor-Plus Ryzen 7 5800X', price: '7,999', img: '/46.jpg' },
        { id: 42, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor Ryzen 9-5900x', price: '8,999', img: '/47.jpg' },
        { id: 43, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer Falkor-Plus Ryzen 9 5900X', price: '10,999', img: '/48.jpg' },
        { id: 44, idCategory: 3, title: 'PC AMD RYZEN', subtitle: 'PC Gamer  Falkor Ryzen 9-5900x', price: '11,999', img: '/49.jpg' },
    ];

    useEffect(() => {
        var promise = new Promise((resolve, reject) => {
            let dataFilterArrayMock;

            if (categoryId == null) {
                dataFilterArrayMock = dataArrayMock;
            } else {
                dataFilterArrayMock = dataArrayMock.filter(x => x.idCategory == categoryId);
            }

            console.log(categoryId)

            if (dataFilterArrayMock.length > 0) {
                console.log("Promesa correcta");
                resolve(dataFilterArrayMock);
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
            setData([])
        });

    }, [categoryId])

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
                    {data.map(elem => (
                        <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
                            <Card>

                                <CardActionArea component={RouterLink} to={'/item/' + elem.id}>
                                    <CardContent>
                                        <CardContent>
                                            <Typography variant="h5" gutterBottom>
                                                <img
                                                    src={elem.img}
                                                    width={300}
                                                    height={250}
                                                    alt=''
                                                    loading="lazy"
                                                />
                                            </Typography>
                                            <Typography style={{ textAlign: 'center', backgroundColor: '#f7f7f7', fontWeight: 500, fontSize: 15, lineHeight: 'normal', fontFamily: 'fantasy', padding: 4 }} variant='body1'>{elem.subtitle}</Typography>
                                            <Typography style={{ textAlign: 'center', fontWeight: 500, fontSize: 14, lineHeight: 'normal', fontFamily: 'fantasy', color: 'red', paddingTop: 6 }} variant='body1'>S/ {elem.price}</Typography>
                                        </CardContent>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>

        </>
    )
}
