// Simulando una base de datos en memoria
const bibliotecarios = []; // Aquí puedes almacenar bibliotecarios temporalmente.

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Validar si el usuario existe
    const bibliotecario = bibliotecarios.find(
        (user) => user.email === email && user.password === password
    );

    if (!bibliotecario) {
        return res.status(401).json({ message: "Credenciales inválidas" });
    }

    res.status(200).json({ message: `Iniciando sesión para ${email}` });
};

exports.create = (req, res) => {
    const { email, password } = req.body;

    // Validar si ya existe un bibliotecario con ese email
    if (bibliotecarios.some((user) => user.email === email)) {
        return res.status(400).json({ message: "El email ya está registrado" });
    }

    // Crear un nuevo bibliotecario
    const newBibliotecario = { email, password };
    bibliotecarios.push(newBibliotecario);

    res.status(201).json({ message: "Bibliotecario creado", data: newBibliotecario });
};