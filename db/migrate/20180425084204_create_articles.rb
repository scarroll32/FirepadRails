class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :description
      t.text :raw_description
      t.text :rendered_description

      t.timestamps
    end
  end
end
