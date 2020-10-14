db.moviles.find({"marca":{$eq: "Oneplus"}}).pretty()

/*
          Nos devuelve lo siguiente:
{
	"_id" : ObjectId("5f86ef30c0830ede12231dd8"),
	"marca" : "Oneplus",
	"modelo" : "8T"
}
{
	"_id" : ObjectId("5f86ef30c0830ede12231dda"),
	"marca" : "Oneplus",
	"modelo" : "Nord"
}
*/
