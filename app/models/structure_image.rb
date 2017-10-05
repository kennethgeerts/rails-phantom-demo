require 'open3'

class StructureImage
  def initialize(structure)
    @structure = structure
  end

  def data
    phantom_file_path = File.expand_path('phantom.js', __dir__)
    cmd = "phantomjs #{phantom_file_path}"
    stdout, _ = Open3.capture2(cmd, stdin_data: @structure.to_json)
    Base64.decode64(stdout)
  end
end
