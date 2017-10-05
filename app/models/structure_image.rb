require 'open3'

class StructureImage
  def initialize(structure)
    @structure = structure
  end

  def data
    Base64.decode64(base64_data)
  end

  def get_binding
    binding
  end

  private

  def base64_data
    phantom_file = Tempfile.new(%w(phantom .js), "#{Rails.root}/tmp")
    begin
      phantom_file_content = File.read(File.expand_path('./structure.js', __dir__))
      interpolated_content = ERB.new(phantom_file_content).result(self.get_binding)
      phantom_file.write(interpolated_content)
      phantom_file.rewind
      stdout, _ = Open3.capture2("phantomjs #{phantom_file.path}")
      stdout
    ensure
      phantom_file.unlink
      phantom_file.close
    end
  end
end
