
# NFT Generator

## Usage
As of v2.0.0, nft-generator-py will use the argparse library in order to support external configuration files and won't require users to interact with the python files themselves.

1. Install requirements: `python3 -m pip install -r requirements.txt`
2. Make a configuration JSON file. See the configuration section below for specifications.
3. Add layer files into the `/images` folder.
4. Run the command `python3 generate.py --amount AMOUNT --config CONFIG`
   
   where:
   1. `AMOUNT` is the amount of images to generate
   2. `CONFIG` is the path pointing to a `.json` file containing valid program configuration.

### Credits
The NFT generator was created by [Jonathan Becker](https://jbecker.dev)

Repo - [Jon-Becker/nft-generator-py](https://github.com/Jon-Becker/nft-generator-py)

