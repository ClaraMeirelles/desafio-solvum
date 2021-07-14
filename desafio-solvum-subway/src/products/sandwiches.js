import imgFrangoAssado from '../img/sandwiches/frango-assado.jpg'
import imgCarneDefumada from '../img/sandwiches/Carne-Defumada.png'
import imgBMT from '../img/sandwiches/BMT_italiano.jpg'
import imgCarneSupreme from '../img/sandwiches/Carne-Supreme.png'
import imgFrango from '../img/sandwiches/Frango.jpg'
import imgFrangoRanch from '../img/sandwiches/Frango_Ranch.jpg'
import imgFrangoDefumado from '../img/sandwiches/Frango_Defumado_Cream_Cheese.jpg'
import imgFrangoEmpanado from '../img/sandwiches/Frango_Empanado.jpg'
import imgFrangoTeriyaki from '../img/sandwiches/Frango_Empanado.jpg'
import imgSteakCheddar from '../img/sandwiches/Steak_Cheddar_Cremoso.jpg'
import imgSteakChurrasco from '../img/sandwiches/Steak_Churrasco.jpg'
import imgSubVeg from '../img/sandwiches/Sub_Veg.jpg'
import imgVegetariano from '../img/sandwiches/Vegetariano.jpg'

export const sandwiches = [
    {
        name: 'Frango Assado',
        img_url: imgFrangoAssado,
        description: 'SUB com suculentos pedaços de Frango Assado? Temos. Acompanhado do delicioso molho Caipira. E claro, nosso pão sempre fresquinho, queijo e vegetais à sua escolha. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 242 },
            valorenergetico: { un: '(kcal)', value: 391 },
            gorduraTotal: { un: '(g)', value: 13 },
            gorduraSaturada: { un: '(g)', value: 2.6 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 986 },
            carboidratos: { un: '(g)', value: 42 },
            fibras: { un: '(g)', value: 3 },
            proteinas: { un: '(g)', value: 27 }
        }
    },
    {
        name: 'Carne Defumada com Cream Cheese',
        img_url: imgCarneDefumada,
        description: 'Deliciosas tiras de carne defumada misturadas com cream cheese. Uma delicia de dar água da boca. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 227 },
            valorenergetico: { un: '(kcal)', value: 368 },
            gorduraTotal: { un: '(g)', value: 15 },
            gorduraSaturada: { un: '(g)', value: 7.5 },
            gorduraTrans: { un: '(g)', value: 0.5 },
            sodio: { un: '(mg)', value: 545 },
            carboidratos: { un: '(g)', value: 42 },
            fibras: { un: '(g)', value: 3 },
            proteinas: { un: '(g)', value: 18 }
        },
    },
    {
        name: 'B.M.T.® Italiano',
        img_url: imgBMT,
        description: 'O sanduíche que vai acabar com toda a sua fome. Servido em pão fresquinho, com fatias de salame, peperoni, presunto, vegetais e condimentos à sua escolha. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 230 },
            valorenergetico: { un: '(kcal)', value: 411 },
            gorduraTotal: { un: '(g)', value: 17 },
            gorduraSaturada: { un: '(g)', value: 6.2 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 1052 },
            carboidratos: { un: '(g)', value: 43 },
            fibras: { un: '(g)', value: 5.6 },
            proteinas: { un: '(g)', value: 23 }
        }
    },
    {
        name: 'Carne Supreme',
        img_url: imgCarneSupreme,
        description: 'SUB com suculentas tiras de carnes? Temos. Acompanhado do delicioso molho Supreme. E claro, nosso pão sempre fresquinho, queijo e vegetais à sua escolha. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 272 },
            valorenergetico: { un: '(kcal)', value: 459 },
            gorduraTotal: { un: '(g)', value: 18 },
            gorduraSaturada: { un: '(g)', value: 4.8 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 965 },
            carboidratos: { un: '(g)', value: 50 },
            fibras: { un: '(g)', value: 5.9 },
            proteinas: { un: '(g)', value: 24 }
        },
    },
    {
        name: 'Frango',
        img_url: imgFrango,
        description: 'Preferência nacional. Frango levemente temperado e assado na perfeição. Fica ainda mais delicioso com vegetais selecionados. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 227 },
            valorenergetico: { un: '(kcal)', value: 298 },
            gorduraTotal: { un: '(g)', value: 4 },
            gorduraSaturada: { un: '(g)', value: 0.9 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 548 },
            carboidratos: { un: '(g)', value: 44 },
            fibras: { un: '(g)', value: 5.3 },
            proteinas: { un: '(g)', value: 22 },
        }
    },
    {
        name: 'Frango Ranch',
        img_url: imgFrangoRanch,
        description: 'Servido em pão fresquinho, com frango defumado em cubos, molho ranch e condimentos à sua escolha. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 237 },
            valorenergetico: { un: '(kcal)', value: 404 },
            gorduraTotal: { un: '(g)', value: 15 },
            gorduraSaturada: { un: '(g)', value: 2.6 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 683 },
            carboidratos: { un: '(g)', value: 44 },
            fibras: { un: '(g)', value: 5.3 },
            proteinas: { un: '(g)', value: 19 }
        },
    },
    {
        name: 'Frango Defumado com Cream Cheese',
        img_url: imgFrangoDefumado,
        description: 'Cubos de frango defumado misturados com o delicioso cream cheese. Uma delicia de dar água da boca. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 232 },
            valorenergetico: { un: '(kcal)', value: 384 },
            gorduraTotal: { un: '(g)', value: 15 },
            gorduraSaturada: { un: '(g)', value: 9.1 },
            gorduraTrans: { un: '(g)', value: 0.6 },
            sodio: { un: '(mg)', value: 521 },
            carboidratos: { un: '(g)', value: 44 },
            fibras: { un: '(g)', value: 5.3 },
            proteinas: { un: '(g)', value: 18 }
        },
    },
    {
        name: 'Frango Empanado',
        img_url: imgFrangoEmpanado,
        description: 'Empanado de Frango. Receita especial do Subway®. Servido em pão fresquinho, frango empanado, queijo e vegetais à sua escolha. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 237 },
            valorenergetico: { un: '(kcal)', value: 409 },
            gorduraTotal: { un: '(g)', value: 13 },
            gorduraSaturada: { un: '(g)', value: 4.8 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 576 },
            carboidratos: { un: '(g)', value: 55 },
            fibras: { un: '(g)', value: 5.3 },
            proteinas: { un: '(g)', value: 18 }
        },
    },
    {
        name: 'Frango Teriyaki',
        img_url: imgFrangoTeriyaki,
        description: 'Experimente o Frango Teriyaki, com pedaços suculentos de peito de frango e o delicioso molho teriyaki. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 237 },
            valorenergetico: { un: '(kcal)', value: 319 },
            gorduraTotal: { un: '(g)', value: 3.6 },
            gorduraSaturada: { un: '(g)', value: 0.8 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 667 },
            carboidratos: { un: '(g)', value: 50 },
            fibras: { un: '(g)', value: 5.3 },
            proteinas: { un: '(g)', value: 23 }
        },
    },
    {
        name: 'Steak Cheddar Cremoso',
        img_url: imgSteakCheddar,
        description: 'O já adorado Steak Churrasco agora com o irresistível cheddar cremoso para mandar bem de verdade. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 261 },
            valorenergetico: { un: '(kcal)', value: 445 },
            gorduraTotal: { un: '(g)', value: 18 },
            gorduraSaturada: { un: '(g)', value: 8 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 1087 },
            carboidratos: { un: '(g)', value: 51 },
            fibras: { un: '(g)', value: 5.4 },
            proteinas: { un: '(g)', value: 21 }
        },
    },
    {
        name: 'Steak Churrasco',
        img_url: imgSteakChurrasco,
        description: 'Um tenro steak de carne bovina com sabor churrasco. É o churrasco feito do jeito que você sempre quis. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 226 },
            valorenergetico: { un: '(kcal)', value: 369 },
            gorduraTotal: { un: '(g)', value: 11 },
            gorduraSaturada: { un: '(g)', value: 3.9 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 711 },
            carboidratos: { un: '(g)', value: 49 },
            fibras: { un: '(g)', value: 5.4 },
            proteinas: { un: '(g)', value: 18 }
        },
    },
    {
        name: 'Sub VEG',
        img_url: imgSubVeg,
        description: 'Sub VEG é o novo sanduíche da Subway com ingredientes de Origem Vegetal, sendo uma opção para os veganos, vegetarianos e para quem quiser experimentar esta deliciosa combinação de Pão Italiano branco, Proteína Vegetal, Cheddar Veg Cremoso e seus vegetais preferidos. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 288 },
            valorenergetico: { un: '(kcal)', value: 689 },
            gorduraTotal: { un: '(g)', value: 39 },
            gorduraSaturada: { un: '(g)', value: 9.4 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 1064 },
            carboidratos: { un: '(g)', value: 52 },
            fibras: { un: '(g)', value: 9.9 },
            proteinas: { un: '(g)', value: 26 }
        },
    },
    {
        name: 'Vegetariano',
        img_url: imgVegetariano,
        description: 'Crocante e delicioso. O sanduíche Vegetariano é uma deliciosa combinação dos seus vegetais preferidos, queijo em um um pão fresquinho. Nos tamanhos de 15cm e 30cm, para você fazer como quiser!',
        nutrition_info: {
            porcao: { un: '(g)', value: 162 },
            valorenergetico: { un: '(kcal)', value: 223 },
            gorduraTotal: { un: '(g)', value: 1.9 },
            gorduraSaturada: { un: '(g)', value: 0.3 },
            gorduraTrans: { un: '(g)', value: 0 },
            sodio: { un: '(mg)', value: 231 },
            carboidratos: { un: '(g)', value: 43 },
            fibras: { un: '(g)', value: 5.3 },
            proteinas: { un: '(g)', value: 9.3 }
        },
    },
]