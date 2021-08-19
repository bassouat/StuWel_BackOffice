enum RubriqueEnum {
    ALLER_FRANCE = "Je soushaite aller en France",
    ECOLE_FRANCE = "Les écoles en France",
    VYG = "Voyage",
    LGMT = "Logement",
    AVI = "AVI",
    VISA = "Visas",
    CAMPUS = "Campus France",
    EN_FRANCE = "Je suis en France"
}

export class Rubrique {
    // static readonly RubriqueEnum = RubriqueEnum;
    // readonly Status = Rubrique.RubriqueEnum;
    id: string;
    data: any;
    name: string;

constructor(rubriqueEnum: string, data: any){
    this.data = data;
    this.name = rubriqueEnum;
}

}
