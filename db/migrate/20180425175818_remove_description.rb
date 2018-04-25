class RemoveDescription < ActiveRecord::Migration[5.2]
  def change
    remove_column :articles, :description
  end
end
