/*
    
    APOD - Imagem atronómica do dia = https://api.nasa.gov/planetary/apod

    Parâmetro	              Tipo	        Padrão	                Descrição

    data	                AAAA-MM-DD	     hoje	    A data da imagem APOD a recuperar

    data de início	        AAAA-MM-DD	    nenhum	    O início de um intervalo de datas, ao solicitar data para 
                                                        um intervalo de datas. Não pode ser usado com date.

    data final	            AAAA-MM-DD	     hoje	    O final do intervalo de datas, quando usado com start_date.

    contar	                   int	        nenhum	    Se isso for especificado, as countimagens escolhidas aleatoriamente serão retornadas. 
                                                        Não pode ser usado com dateou start_datee end_date.

    polegares	               bool	         Falso	    Retorna o URL da miniatura do vídeo. Se um APOD não for um vídeo, este parâmetro será ignorado.

    Chave API	              corda	        DEMO_KEY    Chave api.nasa.gov para uso expandido


    
    
*/ 

module.exports.index = (app, req, res) => {
    res.render("home/home");
};