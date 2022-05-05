using System;
namespace Api_savino_Filmes.Models
{
    public class MovieModel
    {
        private int id;
        private string name;
        private string description;
        private string genre;
        private double note;
        private string author;
        private string base64Image;
       

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Description { get => description; set => description = value; }
        public string Genre { get => genre; set => genre = value; }
        public double Note { get => note; set => note = value; }
        public string Author { get => author; set => author = value; }
        public string Base64Image { get => base64Image; set => base64Image = value; }

        public MovieModel() { }

        public MovieModel(int Id, string Name, string Description, string Genre, double Note, string Author, string Base64Image)
        {
            this.Id = Id;
            this.Name = Name;
            this.Description = Description;
            this.Genre = Genre;
            this.Note = Note;
            this.Author = Author;
            this.base64Image = Base64Image;
        }

    }
}
