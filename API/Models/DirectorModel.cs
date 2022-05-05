using System;
namespace Api_savino_Filmes.Models
{
    public class DirectorModel
    {
        private int id;
        private string name;
        private string base64Image;

        public DirectorModel(int Id, string Name, string Base64Image)
        {
            this.id = Id;
            this.name = Name;
            this.base64Image = Base64Image;
        }

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Base64Image { get => base64Image; set => base64Image = value; }
        public DirectorModel()
        {

        }
    }
}
