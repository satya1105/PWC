// import { Request, Response } from 'express';
// import { fetchAllCountries, fetchCountryByCode } from '../services/restCountriesAPI';

// /**
//  * Fetch all countries.
//  */
// export const getAllCountries = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const countries = await fetchAllCountries();
//     res.status(200).json(countries);
//   } catch (error) {
//     const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
//     console.error(`[Error] getAllCountries: ${errorMessage}`);
//     res.status(500).json({ error: 'Failed to fetch all countries.' });
//   }
// };

// /**
//  * Fetch a specific country by its code.
//  */
// export const getCountryByCode = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { code } = req.params;
//     const country = await fetchCountryByCode(code);

//     if (country) {
//       res.status(200).json(country);
//     } else {
//       res.status(404).json({ error: `Country with code "${code}" not found.` });
//     }
//   } catch (error) {
//     const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
//     console.error(`[Error] getCountryByCode: ${errorMessage}`);
//     res.status(500).json({ error: 'Failed to fetch the country by code.' });
//   }
// };

// /**
//  * Fetch countries by region.
//  */
// export const getCountriesByRegion = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { region } = req.params;
//     const countries = await fetchAllCountries();
//     const filteredCountries = countries.filter((country: any) => country.region === region);

//     if (filteredCountries.length > 0) {
//       res.status(200).json(filteredCountries);
//     } else {
//       res.status(404).json({ error: `No countries found in the region "${region}".` });
//     }
//   } catch (error) {
//     const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
//     console.error(`[Error] getCountriesByRegion: ${errorMessage}`);
//     res.status(500).json({ error: 'Failed to fetch countries by region.' });
//   }
// };

// /**
//  * Search countries by name, region, capital, or timezone.
//  */
// export const searchCountries = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { name, region, capital, timezone } = req.query;
//     const countries = await fetchAllCountries();

//     const filteredCountries = countries.filter((country: any) => {
//       return (
//         (name ? country.name.common.toLowerCase().includes((name as string).toLowerCase()) : true) &&
//         (region ? country.region === region : true) &&
//         (capital ? country.capital?.[0]?.toLowerCase().includes((capital as string).toLowerCase()) : true) &&
//         (timezone ? country.timezones?.includes(timezone as string) : true)
//       );
//     });

//     if (filteredCountries.length > 0) {
//       res.status(200).json(filteredCountries);
//     } else {
//       res.status(404).json({ error: 'No countries match the search criteria.' });
//     }
//   } catch (error) {
//     const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
//     console.error(`[Error] searchCountries: ${errorMessage}`);
//     res.status(500).json({ error: 'Failed to search for countries.' });
//   }
// };

// import { Request, Response } from 'express';
// import { fetchAllCountries, fetchCountryByCode } from '../services/restCountriesAPI';

// /**
//  * Fetch all countries.
//  */
// export const getAllCountries = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const countries = await fetchAllCountries();
//     res.status(200).json(countries);
//   } catch (error) {
//     handleError(res, error, 'Failed to fetch all countries.');
//   }
// };

// /**
//  * Fetch a specific country by its code.
//  */
// export const getCountryByCode = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { code } = req.params;

//     if (!code) {
//       return res.status(400).json({ error: 'Country code is required.' });
//     }

//     const country = await fetchCountryByCode(code);

//     if (country) {
//       res.status(200).json(country);
//     } else {
//       res.status(404).json({ error: `Country with code "${code}" not found.` });
//     }
//   } catch (error) {
//     handleError(res, error, 'Failed to fetch the country by code.');
//   }
// };

// /**
//  * Fetch countries by region.
//  */
// export const getCountriesByRegion = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { region } = req.params;

//     if (!region) {
//       return res.status(400).json({ error: 'Region is required.' });
//     }

//     const countries = await fetchAllCountries();
//     const filteredCountries = countries.filter(
//       (country: any) => country.region.toLowerCase() === region.toLowerCase()
//     );

//     if (filteredCountries.length > 0) {
//       res.status(200).json(filteredCountries);
//     } else {
//       res.status(404).json({ error: `No countries found in the region "${region}".` });
//     }
//   } catch (error) {
//     handleError(res, error, 'Failed to fetch countries by region.');
//   }
// };

// /**
//  * Search countries by name, region, capital, or timezone.
//  */
// export const searchCountries = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { name, region, capital, timezone } = req.query;

//     const countries = await fetchAllCountries();

//     const filteredCountries = countries.filter((country: any) => {
//       return (
//         (name ? country.name.common.toLowerCase().includes((name as string).toLowerCase()) : true) &&
//         (region ? country.region.toLowerCase() === (region as string).toLowerCase() : true) &&
//         (capital ? country.capital?.[0]?.toLowerCase().includes((capital as string).toLowerCase()) : true) &&
//         (timezone ? country.timezones?.includes(timezone as string) : true)
//       );
//     });

//     if (filteredCountries.length > 0) {
//       res.status(200).json(filteredCountries);
//     } else {
//       res.status(404).json({ error: 'No countries match the search criteria.' });
//     }
//   } catch (error) {
//     handleError(res, error, 'Failed to search for countries.');
//   }
// };

// /**
//  * Handle errors consistently.
//  */
// const handleError = (res: Response, error: unknown, message: string) => {
//   const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
//   console.error(`[Error] ${message}: ${errorMessage}`);
//   res.status(500).json({ error: message });
// };
import { Request, Response } from 'express';
import { fetchAllCountries, fetchCountryByCode } from '../services/restCountriesAPI';

/**
 * Fetch all countries.
 */
export const getAllCountries = async (req: Request, res: Response): Promise<void> => {
  try {
    const countries = await fetchAllCountries();
    res.status(200).json(countries);
  } catch (error) {
    handleError(res, error, 'Failed to fetch all countries.');
  }
};

/**
 * Fetch a specific country by its code.
 */
export const getCountryByCode = async (req: Request, res: Response): Promise<void> => {
  try {
    const { code } = req.params;

    if (!code) {
      res.status(400).json({ error: 'Country code is required.' });
      return;
    }

    const country = await fetchCountryByCode(code);

    if (country) {
      res.status(200).json(country);
    } else {
      res.status(404).json({ error: `Country with code "${code}" not found.` });
    }
  } catch (error) {
    handleError(res, error, 'Failed to fetch the country by code.');
  }
};

/**
 * Fetch countries by region.
 */
export const getCountriesByRegion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { region } = req.params;

    if (!region) {
      res.status(400).json({ error: 'Region is required.' });
      return;
    }

    const countries = await fetchAllCountries();
    const filteredCountries = countries.filter(
      (country: any) => country.region?.toLowerCase() === region.toLowerCase()
    );

    if (filteredCountries.length > 0) {
      res.status(200).json(filteredCountries);
    } else {
      res.status(404).json({ error: `No countries found in the region "${region}".` });
    }
  } catch (error) {
    handleError(res, error, 'Failed to fetch countries by region.');
  }
};

/**
 * Search countries by name, region, capital, or timezone.
 */
export const searchCountries = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, region, capital, timezone } = req.query;

    const countries = await fetchAllCountries();

    const filteredCountries = countries.filter((country: any) => {
      return (
        (name ? country.name.common?.toLowerCase().includes((name as string).toLowerCase()) : true) &&
        (region ? country.region?.toLowerCase() === (region as string).toLowerCase() : true) &&
        (capital ? country.capital?.[0]?.toLowerCase().includes((capital as string).toLowerCase()) : true) &&
        (timezone ? country.timezones?.includes(timezone as string) : true)
      );
    });

    if (filteredCountries.length > 0) {
      res.status(200).json(filteredCountries);
    } else {
      res.status(404).json({ error: 'No countries match the search criteria.' });
    }
  } catch (error) {
    handleError(res, error, 'Failed to search for countries.');
  }
};

/**
 * Handle errors consistently.
 */
const handleError = (res: Response, error: unknown, message: string): void => {
  const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
  console.error(`[Error] ${message}: ${errorMessage}`);
  res.status(500).json({ error: message });
};